import { Component } from '@angular/core';

@Component({
  selector: 'pm-register-page',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterPageComponent {
  activeTab = 'email';

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }
}
