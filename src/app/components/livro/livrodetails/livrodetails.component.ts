import { Component, EventEmitter, Input, Output,inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { Livro } from '../../../models/livro';
@Component({
  selector: 'app-livrodetails',
  standalone: true,
  imports: [FormsModule, CommonModule,MdbFormsModule],
  templateUrl: './livrodetails.component.html',
  styleUrl: './livrodetails.component.scss'
})
export class LivrodetailsComponent {
  @Input('livro') livro: Livro = new Livro();
  @Output('retorno') retorno: EventEmitter<any> = new EventEmitter();

  router = inject(Router);

  constructor() { }

  save(){

    Swal.fire( 'Sucesso!', 'Livro salvo com sucesso!', 'success');

    this.retorno.emit(this.livro);  
    this.router.navigate(['admin/livros']);
  }
}
