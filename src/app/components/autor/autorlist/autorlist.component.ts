import { CommonModule } from '@angular/common';
import { Component, TemplateRef, ViewChild, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import {MdbModalModule,MdbModalRef,MdbModalService} from 'mdb-angular-ui-kit/modal';
import { AutordetailsComponent } from '../autordetails/autordetails.component';
import { Autor } from '../../../models/autor';
import Swal from 'sweetalert2';
import { MdbAccordionModule } from 'mdb-angular-ui-kit/accordion';

@Component({
  selector: 'app-autorlist',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
    MdbModalModule,
    AutordetailsComponent,
    MdbAccordionModule,
  ],
  templateUrl: './autorlist.component.html',
  styleUrl: './autorlist.component.scss',
})
export class AutorlistComponent {
  modalService = inject(MdbModalService);
  @ViewChild('modalDetalhe') modalDetalhe!: TemplateRef<any>;
  modalRef!: MdbModalRef<any>;

  lista: Autor[] = [];
  autorEdit!: Autor;

  constructor() {
    this.findAll();
  }

  findAll() {
    let autor1 = new Autor();
    autor1.id = 1;
    autor1.nome = 'Machado de Assis';

    let autor2 = new Autor();
    autor2.id = 2;
    autor2.nome = 'José de Alencar';

    this.lista.push(autor1);
    this.lista.push(autor2);
  }

  new() {
    this.autorEdit = new Autor();
    this.modalRef = this.modalService.open(this.modalDetalhe);
  }

  edit(autor: Autor) {
    this.autorEdit = Object.assign({}, autor); 
    this.modalRef = this.modalService.open(this.modalDetalhe); 
  }

  retornoDetalhe(autor: Autor) {
    if (this.autorEdit.id > 0) {
      let indice = this.lista.findIndex((autori) => {
        return autori.id == this.autorEdit.id;
      });
      this.lista[indice] = autor;
    } else {
      autor.id = 12;
      this.lista.push(autor); //adiciona o autor na lista
    }
    this.modalRef.close();
  }

  deleteById(autor: Autor) {
    Swal.fire({
      title: 'Deseja excluir o autor?',
      showCancelButton: true,
      confirmButtonText: `Sim`,
      cancelButtonText: `Não`,
    }).then((result) => {
      if (result.isConfirmed) {
        let indice = this.lista.findIndex((autori) => {
          return autori.id == autor.id; //encontra o autor na lista
        });
        this.lista.splice(indice, 1); //remove o autor da lista
        Swal.fire('Autor excluído com sucesso!', '', 'success');
      }
    });
  }
}
