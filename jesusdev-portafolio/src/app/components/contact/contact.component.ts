import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Theme } from 'src/app/core/models/theme';
import { ThemeService } from 'src/app/services/theme.service';
import { validateEmail } from './validators/contact-form-email.validator';
import { validatePhone } from './validators/contact-form-phone-validator';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  theme$: Observable<Theme>;
  contactForm: FormGroup;
  constructor( private themeService: ThemeService) { }

  ngOnInit(): void {
    this.theme$ = this.themeService.theme$;
    this.createContactForm();
    this.addValidationsForNonRequiredFields(); //this one is for if the field is not filled ok, but if it is, then validate that information

  }

  createContactForm(){
    this.contactForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      enterprise: new FormControl(''),
      email: new FormControl(''),
      phone: new FormControl(''),
      message: new FormControl('', [Validators.required, Validators.minLength(10)])
    });
  }

  addValidationsForNonRequiredFields(){
    const emailControl = this.contactForm.get('email');
    const phoneControl = this.contactForm.get('phone');

    emailControl.valueChanges.subscribe({
      next:(value: string) =>{
        emailControl.setValidators(validateEmail); 

        if(value !==null){
          if(value.length === 0 && emailControl.touched){
            emailControl.removeValidators(validateEmail);
            emailControl.reset("");
         }
        }
       
      }
    });



    phoneControl.valueChanges.subscribe({
      next:(value : string) => {
          phoneControl.addValidators(validatePhone);
          
          if(value !== null){
            if(value.length === 0 && phoneControl.touched){
              phoneControl.removeValidators(validatePhone)
              phoneControl.reset("");
            }
          }
         
        
      }
    })

  }


  




  onSubmit(){
    console.log(this.contactForm.value);
    this.contactForm.reset();

    //TODO: ToasTr Msj Success
  }
}


