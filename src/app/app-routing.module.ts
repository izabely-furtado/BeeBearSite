import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { TipoEventosComponent } from './pages/eventos/tipo/tipo_eventos.component';
import { EventosComponent } from './pages/eventos/eventos.component';
import { IndexComponent } from './pages/index/index.component';
import { CarrinhoComponent } from './pages/carrinho/carrinho.component';
import { FavoritosComponent } from './pages/favoritos/favoritos.component';
import { ParaEmpresasComponent } from './pages/para_empresas/para_empresas.component';
import { ParceirosComponent } from './pages/parceiros/parceiros.component';
import { PesquisaComponent } from './pages/pesquisa/pesquisa.component';
import { ProgramacaoComponent } from './pages/programacao/programacao.component';
import { PromocoesComponent } from './pages/promocoes/promocoes.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'carrinho', component: CarrinhoComponent },
  { path: 'favoritos', component: FavoritosComponent },
  { path: 'pempresas', component: ParaEmpresasComponent },
  { path: 'parceiros', component: ParceirosComponent },
  { path: 'pesquisa', component: PesquisaComponent },
  { path: 'programacao', component: ProgramacaoComponent },
  { path: 'promocoes', component: PromocoesComponent },
  { path: 'eventos', component: EventosComponent },
  { path: 'eventos/tipo/:id', component: TipoEventosComponent },
  
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
