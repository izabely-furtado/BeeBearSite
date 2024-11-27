import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Colaborador } from 'app/models/colaborador/colaborador';
import { TipoRankingEnum } from 'app/models/enum/tipo-ranking.enum';
import { Ranking } from 'app/models/ranking/ranking';
import { RankingItem } from 'app/models/ranking/ranking_item';
import { ColaboradorService } from 'app/services/colaborador.service';
import { RankingService } from 'app/utils/ranking.list';
import { ConfirmationService, MenuItem, MessageService } from 'primeng/api';

@Component({
  selector: 'app-tempo_ranking',
  templateUrl: './tempo_ranking.component.html',
  styleUrls: ['./tempo_ranking.component.scss']
})
export class TempoRankingComponent {
  items: MenuItem[] | undefined;
  home: MenuItem | undefined;

  dialog: boolean = false;
  lista!: Ranking[];
  item!: Ranking;

  listaCategoria!: Ranking[];
  itemCategoria!: Ranking;
  data_inicio!: Date;
  data_final!: Date;
 
  submitted: boolean = false;

  editando: boolean = false;
  private yourIdTipo: string = "";
  @Input() set idTipo(id: string) { this.yourIdTipo = id; }

  constructor(private service: ColaboradorService, private messageService: MessageService, private confirmationService: ConfirmationService, private route: ActivatedRoute) { 
    
   }

  ngOnInit() {

    this.items = [{ label: 'Ranking', url: './ranking', target: '_self'}, { label: "No Tempo" }];

    this.home = { icon: 'pi pi-home', routerLink: '/' };

    this.listaCategoria = RankingService.getItemsNoTempo()

    
  }

  openNew() {
    this.submitted = false;
    this.dialog = true;
  }

  getImagem(imagem : string): string {
    return "./assets/images/mock/" + imagem
  }

  getEvents() {
    this.lista = RankingService.getItemsNoTempoMeses()
  }

  getSaibaMais(item: Ranking) {
    this.item = item
    this.dialog = true
  } 

  acessar(itemInterno : RankingItem) {
    //redirecionar para o elemento verificando o tipo em item
  }

}
