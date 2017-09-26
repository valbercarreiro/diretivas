import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngstyle',
  templateUrl: './diretiva-ngstyle.component.html',
  styleUrls: ['./diretiva-ngstyle.component.scss']
})
export class DiretivaNgstyleComponent implements OnInit {

  ativo: boolean = false;

  @Input() tamanhoFonte: number=10;

  constructor() { }

  ngOnInit() {
  }

  mudarAtivo(){
    this.ativo = !this.ativo;
  }
}
