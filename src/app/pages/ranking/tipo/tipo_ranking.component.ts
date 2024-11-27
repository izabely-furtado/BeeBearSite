import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TipoRankingEnum } from 'app/models/enum/tipo-ranking.enum';
import { Ranking } from 'app/models/ranking/ranking';
import { RankingItem } from 'app/models/ranking/ranking_item';
import { ColaboradorService } from 'app/services/colaborador.service';
import { RankingService } from 'app/utils/ranking.list';
import { ConfirmationService, MenuItem, MessageService } from 'primeng/api';

@Component({
  selector: 'app-tipo_ranking',
  templateUrl: './tipo_ranking.component.html',
  styleUrls: ['./tipo_ranking.component.scss']
})
export class TipoRankingComponent {
  items: MenuItem[] | undefined;
  home: MenuItem | undefined;

  dialog: boolean = false;
  lista!: Ranking[];
  item!: Ranking;
  
  submitted: boolean = false;

  editando: boolean = false;
  private yourIdTipo: string = "";
  @Input() set idTipo(id: string) { this.yourIdTipo = id; }

  constructor(private service: ColaboradorService, private messageService: MessageService, private confirmationService: ConfirmationService, private route: ActivatedRoute) { 
    
   }

  ngOnInit() {

    this.route.params.subscribe(params => {
      this.yourIdTipo = params['id'];
    });

    this.items = [{ label: 'Ranking', url: './ranking', target: '_self'}, { label: this.yourIdTipo }];

    this.home = { icon: 'pi pi-home', routerLink: '/' };

    this.getEvents();

    
  }

  openNew() {
    this.submitted = false; 
    this.dialog = true;
  }

  getImagem(imagem : string): string {
    return "./assets/images/mock/" + imagem
  }

  getHeader(): string {
    return this.yourIdTipo;
  }

  getEvents() {
    if (this.yourIdTipo == TipoRankingEnum.top_do_top) {
      this.lista = RankingService.getItemsTopDoTop()
    }
    if (this.yourIdTipo == TipoRankingEnum.melhores_colaboradores) {
      this.lista = RankingService.getItemsMelhoresColaboradores()
    }
    if (this.yourIdTipo == TipoRankingEnum.melhores_eventos) {
      this.lista = RankingService.getItemsMelhoresEventos()
    }
    if (this.yourIdTipo == TipoRankingEnum.melhores_produtos) {
      this.lista = RankingService.getItemsMelhoresProdutos()
    }
    if (this.yourIdTipo == TipoRankingEnum.pode_melhorar) {
      this.lista = RankingService.getItemsPodeMelhorar()
    }
  }

  getSaibaMais(item: Ranking) {
    this.item = item
    this.dialog = true
  } 

  acessar(itemInterno : RankingItem) {
    //redirecionar para o elemento verificando o tipo em item
  }

}
