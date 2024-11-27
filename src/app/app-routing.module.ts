import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { ColaboradorComponent } from './pages/cadastro/colaboradores/colaboradores.component';
import { CuponsComponent } from './pages/cadastro/cupons/cupons.component';
import { LotesIngressosComponent } from './pages/cadastro/lotes_ingressos/lotes_ingressos.component';
import { ProdutoComponent } from './pages/cadastro/produtos/produtos.component';
import { RegrasComponent } from './pages/cadastro/regras/regras.component';
import { EmpresaComponent } from './pages/empresa/empresa.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { RankingComponent } from './pages/ranking/ranking.component';
import { TipoRankingComponent } from './pages/ranking/tipo/tipo_ranking.component';
import { TempoRankingComponent } from './pages/ranking/tempo/tempo_ranking.component';
import { FaturamentoComponent } from './pages/faturamento/faturamento.component';
import { EventosFaturamentoComponent } from './pages/faturamento/eventos/eventos_faturamento.component';
import { GeralFaturamentoComponent } from './pages/faturamento/geral/geral_faturamento.component';
import { ProdutosFaturamentoComponent } from './pages/faturamento/produtos/produtos_faturamento.component';
import { TipoEventosComponent } from './pages/eventos/tipo/tipo_eventos.component';
import { EventosComponent } from './pages/eventos/eventos.component';
import { IndexComponent } from './pages/index/index.component';
import { PlanoContratoComponent } from './pages/cadastro/planos_contrato/planos_contrato.component';
import { ClientesComponent } from './pages/cadastro/clientes/clientes.component';
import { ClientesDetalheComponent } from './pages/cadastro/clientes/detalhe/clientes_detalhe.component';
import { PlanoContratoDetalheComponent } from './pages/cadastro/planos_contrato/detalhe/plano_contrato_detalhe.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'empresa', component: EmpresaComponent },
  { path: 'eventos', component: EventosComponent },
  { path: 'eventos/tipo/:id', component: TipoEventosComponent },
  { path: 'ranking', component: RankingComponent },
  { path: 'ranking/tipo/:id', component: TipoRankingComponent },
  { path: 'ranking/No Tempo', component: TempoRankingComponent },
  { path: 'faturamento', component: FaturamentoComponent },
  { path: 'faturamento/Geral', component: GeralFaturamentoComponent },
  { path: 'faturamento/Eventos', component: EventosFaturamentoComponent },
  { path: 'faturamento/Produtos', component: ProdutosFaturamentoComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'cadastro/clientes', component: ClientesComponent },
  { path: 'cadastro/clientes/:id', component: ClientesDetalheComponent },
  { path: 'cadastro/colaboradores', component: ColaboradorComponent },
  { path: 'cadastro/cupons', component: CuponsComponent },
  { path: 'cadastro/lotes_ingressos', component: LotesIngressosComponent },
  { path: 'cadastro/planos_contratado', component: PlanoContratoComponent},
  { path: 'cadastro/planos_contratado/:id', component: PlanoContratoDetalheComponent},
  { path: 'cadastro/produtos', component: ProdutoComponent },
  { path: 'cadastro/regras', component: RegrasComponent },
  
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
