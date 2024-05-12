import { Component, EventEmitter, Input, Output,inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { Editora } from '../../../models/editora';
@Component({
  selector: 'app-editoradetails',
  standalone: true,
  imports: [FormsModule, CommonModule,MdbFormsModule],
  templateUrl: './editoradetails.component.html',
  styleUrl: './editoradetails.component.scss'
})
export class EditoradetailsComponent {
  @Input('editora') editora: Editora = new Editora();
  @Output('retorno') retorno: EventEmitter<any> = new EventEmitter();
  router = inject(Router);

  constructor() { }

  save(){

    Swal.fire( 'Sucesso!', 'Editora salva com sucesso!', 'success');

    this.retorno.emit(this.editora);  
    this.router.navigate(['admin/editora']);
  }
}
