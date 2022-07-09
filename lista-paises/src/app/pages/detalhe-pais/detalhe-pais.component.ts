import { Pais } from './../../shared/models/Pais';
import { PaisesService } from './../../service/paises.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalhe-pais',
  templateUrl: './detalhe-pais.component.html',
  styleUrls: ['./detalhe-pais.component.css'],
})
export class DetalhePaisComponent implements OnInit {
  nomePais!: string;
  pais!: Pais[];
  constructor(
    private paisesService: PaisesService,
    private router: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.router.paramMap.subscribe((res: any) => {
      this.nomePais = res.params.name;
      this.getPais(this.nomePais);
    });
  }

  getPais(nome: string) {
    this.paisesService.getPais(nome).subscribe((res: Pais[]) => {
      this.pais = res;
      if (res[0].currencies) {
        this.pais[0].currencies.chave = Object.keys(res[0].currencies)[0];
      }
      this.pais[0].languages = Object.values(res[0].languages);
      if (this.pais[0].borders) {
        this.getPaisesBorders(this.pais[0].borders.toString());
      }
    });
  }

  getPaisesBorders(paises: string) {
    this.paisesService.getPaisesByCode(paises).subscribe((res) => {
      for (var i = 0; i < this.pais[0].borders.length; i++) {
        this.pais[0].borders[i] = res[i].name.common;
      }
    });
  }
}
