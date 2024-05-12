import { CommonModule } from '@angular/common';
import { Component, TemplateRef, ViewChild, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import {MdbModalModule, MdbModalRef, MdbModalService,} from 'mdb-angular-ui-kit/modal';
import { Editora } from '../../../models/editora';
import Swal from 'sweetalert2';
import { MdbAccordionModule } from 'mdb-angular-ui-kit/accordion';
import { AutordetailsComponent } from '../../autor/autordetails/autordetails.component';
import { EditoradetailsComponent } from "../editoradetails/editoradetails.component";

@Component({
    selector: 'app-editoralist',
    standalone: true,
    templateUrl: './editoralist.component.html',
    styleUrl: './editoralist.component.scss',
    imports: [
        CommonModule,
        FormsModule,
        RouterLink,
        MdbModalModule,
        AutordetailsComponent,
        MdbAccordionModule,
        EditoradetailsComponent
    ]
})
export class EditoralistComponent {
  modalService = inject(MdbModalService);
  @ViewChild('modalDetalhe') modalDetalhe!: TemplateRef<any>;
  modalRef!: MdbModalRef<any>;

  lista: Editora[] = [];
  editoraEdit!: Editora;

  constructor() {
    this.findAll();
  }

  findAll() {
    let editora1 = new Editora();
    editora1.id = 1;
    editora1.nome = 'Editora 1';

    let editora2 = new Editora();
    editora2.id = 2;
    editora2.nome = 'Editora 2';

    this.lista.push(editora1);
    this.lista.push(editora2);
  }

  new() {
    this.editoraEdit = new Editora();
    this.modalRef = this.modalService.open(this.modalDetalhe);
  }

  edit(editora: Editora) {
    this.editoraEdit = Object.assign({}, editora);
    this.modalRef = this.modalService.open(this.modalDetalhe);
  }

  retornoDetalhe(editora: Editora) {
    if (this.editoraEdit.id > 0) {
      let indice = this.lista.findIndex((editorai) => {
        return editorai.id == this.editoraEdit.id;
      });
      this.lista[indice] = editora;
    } else {
      editora.id = 12;
      this.lista.push(editora); //adiciona a editora na lista
    }
    this.modalRef.close();
  }

  deleteById(editora: Editora) {
    Swal.fire({
      title: 'Deseja excluir a editora?',
      showCancelButton: true,
      confirmButtonText: `Sim`,
      cancelButtonText: `Não`,
    }).then((result) => {
      if (result.isConfirmed) {
        let indice = this.lista.findIndex((editorai) => {
          return editorai.id == editora.id; //encontra a editora na lista
        });
        this.lista.splice(indice, 1); //remove a editora da lista
        Swal.fire('Editora excluída com sucesso!', '', 'success');
      }
    });
  }
}
