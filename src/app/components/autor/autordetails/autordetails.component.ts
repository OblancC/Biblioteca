import { Component,EventEmitter, Input, Output } from '@angular/core';
import { Autor } from '../../../models/autor';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-autordetails',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './autordetails.component.html',
  styleUrl: './autordetails.component.scss'
})
export class AutordetailsComponent {

  @Input("autor") autor: Autor = new Autor();
  @Output("retorno") retorno: EventEmitter<any> = new EventEmitter();

  constructor() { }


  save(){
    alert("Salvo com sucesso!");
    this.autor.id=1;
    this.retorno.emit(this.autor);
  }
}