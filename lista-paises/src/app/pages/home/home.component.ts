import { PaisesService } from './../../service/paises.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  paises!: any[];
  constructor(private paisesService: PaisesService) { }

  ngOnInit(): void {
    this.getAllPaises();
  }
  getAllPaises(){
    this.paisesService.getAll().subscribe((res) => {
      this.paises = res;
      console.log(this.paises)
    });
  }
}
