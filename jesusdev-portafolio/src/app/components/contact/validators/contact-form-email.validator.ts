import { AbstractControl } from '@angular/forms';

export function validateEmail(control: AbstractControl) {
    const emailRegex = new RegExp  ('^[\\w-\.]+@([\\w-]+\\.)+[\\w-]{2,4}$');
    const resultado = emailRegex.test(control.value);

    return resultado ? null : {emailPattern: true};

}