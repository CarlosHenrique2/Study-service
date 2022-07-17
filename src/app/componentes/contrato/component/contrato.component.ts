import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contrato',
  templateUrl: './contrato.component.html',
  styleUrls: ['./contrato.component.scss']
})
export class ContratoComponent implements OnInit {
  registerForm!: FormGroup
  constructor(
    private fb: FormBuilder,
    private router: Router) { }

  ngOnInit(): void {
    this.genContrato()
  }

  goDocumento() {
    this.router.navigate(['home-documento'])
  }

  goContrato() {
    this.router.navigate(['home-contrato'])
  }

  goResults() {
    this.router.navigate(['home-results'])
  }
  
  goHome() {
    this.router.navigate(['home'])
  }

  goOut() {
    this.router.navigate([''])
  }

  genContrato() {
    this.registerForm = this.fb.group({
      contrato: [''],
      data: [''],
      nome_cliente: [''],
      valor: ['']
    })
  }

  sendContrato() {

  }

}
