import { Component, EventEmitter, Input, Output,inject } from '@angular/core';
import { Autor } from '../../../models/autor';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';

@Component({
  selector: 'app-autordetails',
  standalone: true,
  imports: [FormsModule, CommonModule,MdbFormsModule],
  templateUrl: './autordetails.component.html',
  styleUrl: './autordetails.component.scss',
})
export class AutordetailsComponent {
  @Input('autor') autor: Autor = new Autor();
  @Output('retorno') retorno: EventEmitter<any> = new EventEmitter();

  router = inject(Router);

  constructor() { }

  save(){

    Swal.fire( 'Sucesso!', 'Autor salvo com sucesso!', 'success');

    this.retorno.emit(this.autor);  
    this.router.navigate(['admin/autor']);
  }
}
