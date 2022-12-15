import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-recovery-password',
  templateUrl: './recovery-password.component.html',
  styleUrls: ['./recovery-password.component.scss']
})
export class RecoveryPasswordComponent {
  formRecovery = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email])
  });

  get email() { return this.formRecovery.get('email'); }
}
