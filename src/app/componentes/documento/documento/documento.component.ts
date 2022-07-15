import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { documento } from 'src/app/interfaces/interfaces';
import { DocumentoService } from '../service/documento.service';

@Component({
  selector: 'app-documento',
  templateUrl: './documento.component.html',
  styleUrls: ['./documento.component.scss']
})
export class DocumentoComponent implements OnInit {
  logindocumento!: FormGroup;
  logdocumento!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private documentoservice: DocumentoService,
    ) { }

  ngOnInit(): void {
    
  }

  send(){
    this.logdocumento = this.fb.group({
        login: ['', ''],
      })
  
   console.log(this.documentoservice.getData()) 
  }

}
