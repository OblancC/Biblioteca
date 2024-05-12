import { CommonModule } from '@angular/common';
import { Component, TemplateRef, ViewChild, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { MdbAccordionModule } from 'mdb-angular-ui-kit/accordion';
import { MdbModalModule, MdbModalService, MdbModalRef } from 'mdb-angular-ui-kit/modal';
import Swal from 'sweetalert2';
import { Livro } from '../../../models/livro';
import { LivrodetailsComponent } from '../livrodetails/livrodetails.component';

@Component({
  selector: 'app-livrolist',
  standalone: true,
  imports: [CommonModule,
    FormsModule,
    RouterLink,
    MdbModalModule,
    LivrodetailsComponent,
    MdbAccordionModule],
  templateUrl: './livrolist.component.html',
  styleUrl: './livrolist.component.scss'
})
export class LivrolistComponent {
  modalService = inject(MdbModalService);
  @ViewChild('modalDetalhe') modalDetalhe!: TemplateRef<any>;
  modalRef!: MdbModalRef<any>;

  lista: Livro[] = [];
  livroEdit!: Livro;

  constructor() {
    this.findAll();
  }

  findAll() {
    let livro1 = new Livro();
    livro1.id = 1;
    livro1.nome = 'Machado de Assis';

    let livro2 = new Livro();
    livro2.id = 2;
    livro2.nome = 'José de Alencar';

    this.lista.push(livro1);
    this.lista.push(livro2);
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
    if (this.livroEdit.id > 0) {
      let indice = this.lista.findIndex((livroi) => {
        return livroi.id == this.livroEdit.id;
      });
      this.lista[indice] = livro;
    } else {
      livro.id = 12;
      this.lista.push(livro); //adiciona o livro na lista
    }
    this.modalRef.close();
  }

  deleteById(livro: Livro) {
    Swal.fire({
      title: 'Deseja excluir o livro?',
      showCancelButton: true,
      confirmButtonText: `Sim`,
      cancelButtonText: `Não`,
    }).then((result) => {
      if (result.isConfirmed) {
        let indice = this.lista.findIndex((livroi) => {
          return livroi.id == livro.id; //encontra o livro na lista
        });
        this.lista.splice(indice, 1); //remove o livro da lista
        Swal.fire('Livro excluído com sucesso!', '', 'success');
      }
    });
  }
}
