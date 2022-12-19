import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import Swal, { SweetAlertResult } from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertsOldProgrammerService {
  private dialogTitle = environment.appTitle;

  constructor() { }

  alert(message: string): Promise<SweetAlertResult<any>> {
    return Swal.fire(this.dialogTitle, message);
  }
}
