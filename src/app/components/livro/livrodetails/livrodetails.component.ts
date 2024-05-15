import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { Livro } from '../../../models/livro';
import { LivroService } from '../../../services/livro.service';
@Component({
  selector: 'app-livrodetails',
  standalone: true,
  imports: [FormsModule, CommonModule, MdbFormsModule],
  templateUrl: './livrodetails.component.html',
  styleUrl: './livrodetails.component.scss',
})
export class LivrodetailsComponent {
  @Input('livro') livro: Livro = new Livro();
  @Output('retorno') retorno: EventEmitter<any> = new EventEmitter();

  router = inject(ActivatedRoute);
  router2 = inject(Router);

  livroService = inject(LivroService);

  constructor() {
    let id = this.router.snapshot.params['id'];
    if (id > 0) {
      this.findById(id);
    }
  }

  findById(id: number) {
    this.livroService.findById(id).subscribe({
      next: (data) => {
        this.livro = data;
      },
      error: (error) => {
        console.log(error);
        Swal.fire({
          title: 'Deu Ruim',
          icon: 'error',
          confirmButtonText: 'OK',
        });
      },
    });
  }

  save() {
    if (this.livro.id > 0) {
      this.livroService.update(this.livro).subscribe({
        next: (retorno) => {
          Swal.fire({
            title: retorno,
            icon: 'success',
            confirmButtonText: 'OK',
          });
          this.router2.navigate(['admin/livros'], {
            state: { livroNovo: this.livro },
          });
        },
        error: (error) => {
          alert(error.status);
          console.log(error);

          Swal.fire({
            title: 'Deu Ruim',
            icon: 'error',
            confirmButtonText: 'OK',
          });
        },
      });
    } else {
      this.livroService.save(this.livro).subscribe({
        next: (retorno) => {
          Swal.fire({
            title: 'Livro Salvo com Sucesso',
            icon: 'success',
            confirmButtonText: 'OK',
          });
          this.router2.navigate(['admin/livros'], {
            state: { livroNovo: this.livro },
          });
          this.retorno.emit(this.livro);
        },
        error: (error) => {
          console.log(error);
          Swal.fire({
            title: 'Deu Ruim',
            icon: 'error',
            confirmButtonText: 'OK',
          });
        },
      });
    }
  }
}
