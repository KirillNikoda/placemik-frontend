import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'pm-auth-prompt',
  templateUrl: './prompt.component.html',
  styleUrls: ['./prompt.component.scss'],
})
export class AuthPromptComponent {
  @Input() promptTitle!: string;
  @Input() promptButtonTitle!: string;
  @Output() promptEvent = new EventEmitter();

  emitPrompt() {
    this.promptEvent.emit();
  }
}
