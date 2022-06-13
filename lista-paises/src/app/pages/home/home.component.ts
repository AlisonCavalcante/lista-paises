import { PaisesService } from './../../service/paises.service';
import { Component, OnInit } from '@angular/core';
import { Pais } from 'src/app/shared/models/Pais';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  paises!: Pais[];
  setPaises!: Pais[];
  constructor(private paisesService: PaisesService) { }

  ngOnInit(): void {
    this.getAllPaises();
  }
  getAllPaises(){
    this.paisesService.getAll().subscribe((res) => {
      this.paises = res;
      console.log(this.paises)
      this.setPaises  = res;
    });
  }

  filterPesquisa(event: any){
   const paisesFilter = this.setPaises.filter((paises: Pais) =>{
      return !paises.name.common.indexOf(event)
    });
    this.paises = paisesFilter;
  }
}
