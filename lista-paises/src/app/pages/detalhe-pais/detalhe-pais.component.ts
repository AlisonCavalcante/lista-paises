import { PaisesService } from './../../service/paises.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalhe-pais',
  templateUrl: './detalhe-pais.component.html',
  styleUrls: ['./detalhe-pais.component.css']
})
export class DetalhePaisComponent implements OnInit {

  constructor(private PaisesService: PaisesService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.router.paramMap.subscribe( ( res: any) => console.log(res.params.id))
  }

}
