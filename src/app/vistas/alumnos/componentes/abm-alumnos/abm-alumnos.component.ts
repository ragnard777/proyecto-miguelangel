import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-abm-alumnos',
  templateUrl: './abm-alumnos.component.html',
  styleUrls: ['./abm-alumnos.component.scss'],
})
export class AbmAlumnosComponent {
  nombreControl = new FormControl<string | null>('', [
    Validators.required,
    Validators.minLength(2),
    /*    noHomeroValidator(), */
  ]);
  aliasControl = new FormControl<string | null>('', [
    /*    noHomeroValidator(), */
  ]);
  emailControl = new FormControl<string | null>('', [
    Validators.required,
    Validators.email,
  ]);
  passwordControl = new FormControl<string | null>('', [Validators.required]);

  userForm = new FormGroup({
    nombre: this.nombreControl,
    alias: this.aliasControl,
    email: this.emailControl,
    password: this.passwordControl,
  });

  // userForm: FormGroup;

  constructor(
    private router: Router,
    private dialogRef: MatDialogRef<AbmAlumnosComponent>,
    @Inject(MAT_DIALOG_DATA) private data?: any
  ) {
    if (this.data) {
      this.nombreControl.setValue(this.data.nombre);
      this.aliasControl.setValue(this.data.alias);
      this.passwordControl.setValue(this.data.password);
      this.emailControl.setValue(this.data.email);
    }
  }

  onSubmit(): void {
    if (this.userForm.invalid) {
      this.userForm.markAllAsTouched();
    } else {
      console.log(this.userForm.value);
      this.dialogRef.close(this.userForm.value);
      this.goToItems();
    }
  }

  goToItems() {
    this.router.navigate(['/home']);
  }
}
