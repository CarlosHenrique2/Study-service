import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../service/login.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  loginSubmit$?: Subscription;
 
  constructor(
    private router: Router,
    private loginBuilder: FormBuilder, 
    private clientService: LoginService
    ) { }

  ngOnInit(): void {
    this.genFormLogin();
  }

  genFormLogin(){
    this.loginForm = this.loginBuilder.group(
      {
        login: ['', ''],
        password: ['', '']
      }
    )
  }

  sendLogin(){
    let control = this.loginForm.controls;

    let json = {
      login: control['login'].value,
      password: control['password'].value
    }

    this.loginSubmit$ = this.clientService.login().subscribe({
      next: (next) => { 
        
        console.info(next) 
        this.router.navigate(['home'])
      },
      error: (error) => { console.warn(error), alert('erro') },
      complete: () => {
      }
    })
  }

  ngOnDestroy(){
    this.loginSubmit$?.unsubscribe();
  }
}
