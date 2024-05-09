import { Routes } from '@angular/router';
import { LoginComponent } from './components/layout/login/login.component';
import { PrincipalComponent } from './components/layout/principal/principal.component';
import { LivrolistComponent } from './components/livro/livrolist/livrolist.component';
import { AutorlistComponent } from './components/autor/autorlist/autorlist.component';
import { EditoralistComponent } from './components/editora/editoralist/editoralist.component';
import { LivrodetailsComponent } from './components/livro/livrodetails/livrodetails.component';
import { AutordetailsComponent } from './components/autor/autordetails/autordetails.component';
import { EditoradetailsComponent } from './components/editora/editoradetails/editoradetails.component';

export const routes: Routes = [
    {path: "", redirectTo: "login", pathMatch: 'full'},
    {path: "login", component: LoginComponent },
    {path: "admin", component: PrincipalComponent, children: [
        {path:"livros", component: LivrolistComponent},
        {path: "livros/new", component: LivrodetailsComponent},
        {path: "livros/edit/:id", component: LivrodetailsComponent},
        {path:"autor", component: AutorlistComponent},
        {path: "autor/new", component: AutordetailsComponent},    
        {path: "autor/edit/:id", component: AutordetailsComponent},
        {path: "editora", component: EditoralistComponent},
        {path: "editora/new", component: EditoradetailsComponent},
        {path: "editora/edit/:id", component: EditoradetailsComponent}
        
    ]}
];