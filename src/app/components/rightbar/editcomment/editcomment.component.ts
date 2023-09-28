import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommentsPayload } from 'src/app/dtmodels/comments-payload';

@Component({
  selector: 'app-editcomment',
  templateUrl: './editcomment.component.html',
  styleUrls: ['./editcomment.component.css']
})
export class EditcommentComponent {

  @Input() editedComment?: CommentsPayload;
  @Output() onSave = new EventEmitter<CommentsPayload>();
  @Output() onCancel = new EventEmitter<void>();

  saveComment() {
    this.onSave.emit(this.editedComment);
  }

  cancelEdit() {
    this.onCancel.emit();
  }

}
