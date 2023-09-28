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
        comment: this.commentForm.controls['text'].value,
        created_at: new Date().getTime(),
        edited_at: new Date().getTime(),
      }

      this.commentService.postComments(payload).subscribe(result => {
        console.log(result);
      })

      this.comments.push(payload);
    }
  }

  userIdCheck(userId: string):boolean {
    console.log(userId);
    console.log(this.authService.getUserId())
    console.log(userId===this.authService.getUserId())
    return userId===this.authService.getUserId();
  }

  delete(id: string) {
    //import auth-service to compare post user id to logged in user id

    //delete from DB
    this.commentService.deleteComment(id).subscribe(result => {
      console.log(result);
    })

    //update comment array on page

  }

}
