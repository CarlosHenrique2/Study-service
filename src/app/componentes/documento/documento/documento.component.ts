import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { documento } from 'src/app/interfaces/interfaces';
import { DocumentoService } from '../service/documento.service';

@Component({
  selector: 'app-documento',
  templateUrl: './documento.component.html',
  styleUrls: ['./documento.component.scss']
})
export class DocumentoComponent implements OnInit {
  searchDocument!: FormGroup;
  search!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private documentoservice: DocumentoService,
    private router: Router
    ) { }

  ngOnInit(): void {
    
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

  genDocumento() {
    this.searchDocument = this.fb.group({
      pesquisa: ['', '']
    })
  }

  sendDocumento() {
    let control = this.searchDocument.controls;

    let documento = {
      pesquisa: control['pesquisa'].value
    }

    this.documentoservice.getData()
  }


  

  reciveDocumento(){

    this.search = this.fb.group({
        data: ['', ''],
        nomecliente: ['', ''],
        valor: ['', ''],
      })

      let control = this.search.controls;
      
    
      let recive = {
        data: control['data_documeto'],
        nomecliente: control['nome_cliente'],
        valor: control['valor_documento']
      }
  
  }

}
