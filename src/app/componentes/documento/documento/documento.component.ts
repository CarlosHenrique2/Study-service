import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { documento } from 'src/app/interfaces/interfaces';
import { DocumentoService } from '../service/documento.service';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-documento',
  templateUrl: './documento.component.html',
  styleUrls: ['./documento.component.scss']
})
export class DocumentoComponent implements OnInit {
  searchDocument!: FormGroup;
  search!: FormGroup;
  datos: any = {};
  constructor(
    private fb: FormBuilder,
    private documentoservice: DocumentoService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.genDocumento()
    this.reciveDocumento()
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

  genDocumento() {
    this.searchDocument = this.fb.group({
      pesquisa: ['', '']
    })
  }

 async sendDocumento() {
   let iddocumento = this.searchDocument.get('pesquisa')?.value
   
   console.log(this.documentoservice.getData(iddocumento));
   const bananas = await lastValueFrom(this.documentoservice.getData(iddocumento));
   this.datos = bananas;
   /*  this.documentoservice.getData(iddocumento).subscribe({
      next: (data) => { 
        this.datos = data
        return console.info(data) 
      },
      error: (error) => { return console.warn(error), alert('erro') },
    }) */
  }

  reciveDocumento(){
    this.search = this.fb.group({
   /*    data_documeto: {value: , disable: true},
      nome_cliente: {value: , disable: true},
      valor_documento: {value: , disable: true} */
      }) 
  }

}
