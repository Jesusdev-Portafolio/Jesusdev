import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Theme } from 'src/app/core/models/theme';
import { ThemeService } from 'src/app/services/theme.service';
import { validateEmail } from './validators/contact-form-email.validator';
import { validatePhone } from './validators/contact-form-phone-validator';
import { EmailService } from 'src/app/services/email.service';
import { EmailJSResponseStatus } from '@emailjs/browser';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { TranslocoService } from '@ngneat/transloco';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  theme$: Observable<Theme>;
  contactForm: FormGroup;
  constructor( private themeService: ThemeService, private emailService : EmailService, private toastr: ToastrService, private spinner: NgxSpinnerService, private transloco: TranslocoService) { }

  ngOnInit(): void {
    this.theme$ = this.themeService.theme$;
    this.createContactForm();
    this.addValidationsForNonRequiredFields(); //this one is for if the field is not filled ok, but if it is, then validate that information
//esto ahce que al reset lo ponga con '' y no con null

  }


  createContactForm(){
    this.contactForm = new FormGroup({
      name: new FormControl('',[Validators.required]),
      enterprise: new FormControl('', {nonNullable: true}),//esto ahce que al reset lo ponga con '' y no con null
      email: new FormControl('', {nonNullable: true}),
      phone: new FormControl('', {nonNullable: true}),
      message: new FormControl('', [Validators.required, Validators.minLength(10)])
    });
  }

  addValidationsForNonRequiredFields(){ //add conditionally if user start to fill it
    const emailControl = this.contactForm.get('email');
    const phoneControl = this.contactForm.get('phone');

    this.addValidatorToControlifItIsFilled(emailControl, validateEmail);
    this.addValidatorToControlifItIsFilled(phoneControl, validatePhone);

  }

  onSubmit(){
    this.spinner.show();
    this.emailService.sendMail(this.contactForm)
      .then((value) => this.mensajeEnviado(value));
  }
  

  private addValidatorToControlifItIsFilled(control: AbstractControl, validator: any) {

    control.valueChanges.subscribe({
      next: (value: string) =>{

        if(value.trim().length > 0){
          control.setValidators(validator); 
          control.updateValueAndValidity({emitEvent: false});
       }
    
       if(value.trim().length === 0 && control.dirty || value.trim().length === 0 && control.touched){
          control.removeValidators(validator);
          control.updateValueAndValidity({emitEvent: false});
          control.reset();
      }   

      }
    })
  }

  private mensajeEnviado(value: EmailJSResponseStatus){
    this.spinner.hide();

    let toastrMessages = this.transloco.translateObject('toastr');

    if(value.status.toString().startsWith('2')){
       this.contactForm.reset(); //after reset if some input was filled need to backup to non required because its optional field
       this.contactForm.controls['email'].clearValidators();
       this.contactForm.controls['email'].updateValueAndValidity({emitEvent:false});
       this.contactForm.controls['phone'].clearValidators();
       this.contactForm.controls['phone'].updateValueAndValidity({emitEvent:false});


        this.toastr.success(toastrMessages.successDescription, toastrMessages.successTitle ,{
          timeOut:2500,
          positionClass:'toast-top-center'
        });

    }
    else{
        this.toastr.error(toastrMessages.errorDescription , toastrMessages.errorTitle,{
          timeOut:2500,
          positionClass:'toast-top-center'
        }); 
    }
  }

}


