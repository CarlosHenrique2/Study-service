import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  constructor(private router: Router) { }

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

  goOut() {
    this.router.navigate([''])
  }

}
