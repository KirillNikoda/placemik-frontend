import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'pm-auth-input',
  styleUrls: ['./auth-input.component.scss'],
  templateUrl: './auth-input.component.html',
})
export class AuthInputComponent {
  @Input() id!: string;
  @Input() label!: string;
  @Input() placeholder!: string;
  @Input() type!: string;
  @Input() bindModelData: any;

  @Output() bindModelDataEvent = new EventEmitter();

  updateData(e: any) {
    this.bindModelDataEvent.emit(e);
  }
}
