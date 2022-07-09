import { PaisesService } from './../../service/paises.service';
import { Component, OnInit } from '@angular/core';
import { Pais } from 'src/app/shared/models/Pais';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  paises!: Pais[];
  setPaises!: Pais[];
  formFiltro!: FormGroup;
  regioes!: string;
  constructor(private paisesService: PaisesService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.getAllPaises();
    this.initForm();
  }
  getAllPaises(){
    this.paisesService.getAll().subscribe((res) => {
      this.paises = res;
      this.setPaises  = res;
    });
  }

  initForm(){
    this.formFiltro = this.formBuilder.group({
      regiao: [null]
    })
  }

  filterPesquisa(event: any){
   const paisesFilter = this.setPaises.filter((paises: Pais) =>{
      return !paises.name.common.indexOf(event)
    });
    this.paises = paisesFilter;
  }

  teste(){
    console.log(this.regioes)
  }
}
