import { CommonModule } from '@angular/common';
import { Component, TemplateRef, ViewChild, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { MdbAccordionModule } from 'mdb-angular-ui-kit/accordion';
import {
  MdbModalModule,
  MdbModalService,
  MdbModalRef,
} from 'mdb-angular-ui-kit/modal';
import Swal from 'sweetalert2';
import { Livro } from '../../../models/livro';
import { LivrodetailsComponent } from '../livrodetails/livrodetails.component';
import { LivroService } from '../../../services/livro.service';

@Component({
  selector: 'app-livrolist',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink,MdbModalModule,LivrodetailsComponent,MdbAccordionModule],
  templateUrl: './livrolist.component.html',
  styleUrl: './livrolist.component.scss',
})
export class LivrolistComponent {

  lista: Livro[] = [];
  livroEdit: Livro = new Livro();

  livrosService = inject(LivroService);

  modalService = inject(MdbModalService);
  @ViewChild('modalDetalhe') modalDetalhe!: TemplateRef<any>;
  modalRef!: MdbModalRef<any>;

  constructor() {
    this.listAll();

    let livroNovo = history.state.livroNovo;
    let livroEditado = history.state.livroEditado;

    if(livroNovo != null){
      livroNovo.id = 12;
      this.lista.push(livroNovo);
    }

    if(livroEditado != null){
      let indice = this.lista.findIndex((x) => {
        return x.id == livroEditado.id;
      });
      this.lista[indice] = livroEditado;
    }

  }

  listAll() {
    this.livrosService.listAll().subscribe({
      next: lista =>{
        console.log('teste');
        this.lista = lista;
      },
      error: error => {
        alert('Erro ao buscar livros');
      }
  });
  }

  new() {
    this.livroEdit = new Livro();
    this.modalRef = this.modalService.open(this.modalDetalhe);
  }

  edit(livro: Livro) {
    this.livroEdit = Object.assign({}, livro);
    this.modalRef = this.modalService.open(this.modalDetalhe);
  }

  retornoDetalhe(livro: Livro) {
    this.listAll();
    this.modalRef.close();
  }

  deleteById(livro: Livro) {
    Swal.fire({
      title: 'Deseja excluir o livro?',
      icon: 'question',
      showConfirmButton: true,
      showDenyButton: true,
      confirmButtonText: `Sim`,
      cancelButtonText: `Não`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.livrosService.delete(livro.id).subscribe({
          next: (retorno) => {
            Swal.fire({
              title: retorno,
              icon: 'success',
              confirmButtonText: 'OK',
            });
            this.listAll();
          },
          error: (error) => {
            console.log(error);
            Swal.fire({
              title: 'Deu Ruim',
              icon: 'error',
              confirmButtonText: 'OK',
            });
          }
        });
      }
    });
  }
}
