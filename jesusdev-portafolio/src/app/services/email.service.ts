import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import emailjs from '@emailjs/browser'

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor() { }

  sendMail(form : FormGroup){
   const enterprise = this.replaceEmptyorNullValuesWithDefaultValues(form.controls["enterprise"].value);
   const phone = this.replaceEmptyorNullValuesWithDefaultValues(form.controls["enterprise"].value); 
   const email = this.replaceEmptyorNullValuesWithDefaultValues(form.controls["enterprise"].value); 

    emailjs.init('p9U51yiZbTTFthEBc');

    return emailjs.send("service_p96fcxl","template_man52sz",{
      name       : form.value.name,
      enterprise : enterprise,
      email      : email,
      phone      : phone,
      message    : form.value.message
   });

 
}


//esto es para los campos opcionales
private replaceEmptyorNullValuesWithDefaultValues(inputText : string){
    if(inputText === null || inputText.trim().length === 0 ){
      return "no definido";
    }   
    return inputText;
}

}



