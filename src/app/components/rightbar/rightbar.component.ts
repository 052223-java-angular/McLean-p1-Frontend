import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommentsPayload } from 'src/app/dtmodels/comments-payload';
import { AuthService } from 'src/app/services/auth-service.service';
import { CommentsService } from 'src/app/services/comments.service';

@Component({
  selector: 'app-rightbar',
  templateUrl: './rightbar.component.html',
  styleUrls: ['./rightbar.component.css']
})
export class RightbarComponent implements OnInit {

  commentForm!: FormGroup;
  //response from backend contains userId
  comments: any;
  isEditing: boolean = false;

  constructor(
    private fb: FormBuilder,
    private commentService: CommentsService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.commentForm = this.fb.group({
      text: ['', [Validators.required, Validators.minLength(3)]],
    });

    this.commentService.getComments().subscribe(result => {
      console.log(result);
      this.comments = result;
    })
    //read comments from backend and render on page
  }

  onSubmit() {
    if(this.commentForm.valid) {
      console.log(this.commentForm.value);

      //send to backend
      const payload: CommentsPayload = {
        id: '',
        comment: this.commentForm.controls['text'].value,
        created_at: new Date().getTime(),
        edited_at: new Date().getTime(),
        userId: '',
        isEditing: false
      }

      //optimistic update: add the new comment to the frontend array without waiting
      this.comments.push(payload);

      this.commentService.postComments(payload).subscribe(result => {
        console.log(result);
        payload.id = result.id;
        payload.userId = result.userId;
      },
      error => {
        console.log('error creating comment: ', error);
        const index = this.comments.indexOf(payload);
        if(index !== -1) {
          this.comments.splice(index, 1);
        }
      })

      
    }
  }

  userIdCheck(userId: string): boolean {
    console.log(userId);
    console.log(this.authService.getUserId())
    console.log(userId===this.authService.getUserId())
    return userId===this.authService.getUserId();
  }

  delete(comment: CommentsPayload): void {
    //optimistic update: remove the comment from frontend immediately
    const index = this.comments.indexOf(comment);
    if(index !== -1) {
      this.comments.splice(index, 1);
    }

    //delete from DB
    this.commentService.deleteComment(comment.id).subscribe(result => {
      console.log(result);
    })

    //update comment array on page

  }

  enableEdit(comment: CommentsPayload) {
    comment.isEditing = true;
    //make local to hide delete/edit
    this.isEditing = true;
  }

  cancelEditComment(comment: CommentsPayload) {
    comment.isEditing = false;
    this.isEditing = false;
  }

  saveEditedComment(editedComment: CommentsPayload): void {

    editedComment.edited_at = new Date().getTime();

    this.commentService.updateComment(editedComment.id, editedComment).subscribe(result => {
        console.log(result);
        Object.assign(editedComment, result);
        editedComment.isEditing = false;
        this.isEditing = false;
    },
    (error) => {
      console.error('Error updating comment: ', error);
    })
  }

}
