import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EC_EMAIL_ALREADY_EXISTS } from 'src/app/shared/constants/exception-codes';
import { AlertsOldProgrammerService } from 'src/app/shared/services/alerts/alerts-old-programmer.service';
import { RegisterService } from 'src/app/shared/services/authentication/register.service';
import { GeneralValidatorService } from 'src/app/shared/services/validators/general-validator.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  isRegistrationInProcess = false;
  constructor(private registerService: RegisterService, private alertsService: AlertsOldProgrammerService,
    private router: Router) { }

  formRegister = new FormGroup({
    email: new FormControl('', [Validators.required,Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8),
      GeneralValidatorService.validateOneCharacter, GeneralValidatorService.validateOneNumber,
      GeneralValidatorService.validateOneSpecialCharacter])
  });

  get email() { return this.formRegister.get('email'); }
  get password() { return this.formRegister.get('password'); }

  registerNewUser() {
    this.isRegistrationInProcess = true;
    if (this.formRegister.valid) {
      this.registerService.registerNewUser({
        email: this.email?.value ?? '',
        password: this.password?.value ?? ''
      }).subscribe(response => {
        if (response.errors.length > 0) {
          if (response.errors.findIndex(ge => ge.code == EC_EMAIL_ALREADY_EXISTS) != -1) {
            this.alertsService.alert("Email typed already exists");
          } else {
            response.errors.forEach(error => console.error(error));
            this.alertsService.alert("An error ocurred, please try again a few minute later or contact to owner's page");
          }
        } else {
          this.alertsService.alert("Email was registred succesfuly, please check your email to confirm").then(_ => {
            this.router.navigate(['../login']);
          });
        }
        this.isRegistrationInProcess = false;
      });
    }
  }
}
