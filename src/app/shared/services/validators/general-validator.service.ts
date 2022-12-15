import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { RegexService } from '../utils/regex.service';

@Injectable({
  providedIn: 'root'
})
export class GeneralValidatorService {

  constructor(
  ) { }

  public static validateOneCharacter(control: AbstractControl): ValidationErrors | null {
    const validation = RegexService.hasAtLeastOneCharacter(control.value);
    return validation ? null : {
      atLeastOneCharacter: { value: control.value }
    };
  }

  public static validateOneNumber(control: AbstractControl): ValidationErrors | null {
    const validation = RegexService.hasAtLeastOneNumber(control.value);
    return validation ? null : {
      atLeastOneNumber: { value: control.value }
    };
  }

  public static validateOneSpecialCharacter(control: AbstractControl): ValidationErrors | null {
    const validation = RegexService.hasAtLeastOneSpecialCharacter(control.value);
    return validation ? null : {
      atLeastOneSpecialCharacter: { value: control.value }
    };
  }
}
