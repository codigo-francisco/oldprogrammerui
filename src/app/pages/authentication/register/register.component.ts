import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegexService } from 'src/app/shared/services/utils/regex.service';
import { GeneralValidatorService } from 'src/app/shared/services/validators/general-validator.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  constructor(
  ) { }

  formRegister = new FormGroup({
    email: new FormControl('', [Validators.required,Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8),
      GeneralValidatorService.validateOneCharacter, GeneralValidatorService.validateOneNumber,
      GeneralValidatorService.validateOneSpecialCharacter])
  });

  get email() { return this.formRegister.get('email'); }
  get password() { return this.formRegister.get('password'); }
}
