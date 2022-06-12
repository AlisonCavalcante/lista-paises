import { Pais } from './../../shared/models/Pais';
import { PaisesService } from './../../service/paises.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalhe-pais',
  templateUrl: './detalhe-pais.component.html',
  styleUrls: ['./detalhe-pais.component.css']
})
export class DetalhePaisComponent implements OnInit {

  nomePais!: string;
  pais!: Pais[];
  constructor(private paisesService: PaisesService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.router.paramMap.subscribe( ( res: any) => {
      this.nomePais = res.params.name;
      this.getPais(this.nomePais);
    })
  }

  getPais(nome: string){
    this.paisesService.getPais(nome).subscribe((res: Pais[]) => {
      this.pais = res;
      this.pais[0].currencies.chave = Object.keys(res[0].currencies)[0];
       this.pais[0].languages.chave = Object.keys(res[0].languages)[0];
      console.log(this.pais[0].currencies.chave)
      // console.log(this.pais[0].languages.chave)
      console.log(this.pais)
    });
  }

}
