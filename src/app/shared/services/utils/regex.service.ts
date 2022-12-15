import { Injectable } from '@angular/core';
import { atLeastOneCharacter, atLeastOneNumber, atLeastOneSpecialCharacter } from '../../constants/regex-constants';

@Injectable({
  providedIn: 'root'
})
export class RegexService {

  constructor() { }

  public static hasAtLeastOneCharacter(value: string): boolean {
    return atLeastOneCharacter.test(value);
  }

  public static hasAtLeastOneSpecialCharacter(value: string): boolean {
    return atLeastOneSpecialCharacter.test(value);
  }

  public static hasAtLeastOneNumber(value: string): boolean {
    return atLeastOneNumber.test(value);
  }
}
