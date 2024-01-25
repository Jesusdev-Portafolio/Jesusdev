import { AbstractControl } from '@angular/forms';

export function validatePhone(control: AbstractControl) {
    const phoneRegex = new RegExp(/^[69]\d{8}$/);
    
    const resultado = phoneRegex.test(control.value);

    return resultado ? null : {phonePattern: true};

}