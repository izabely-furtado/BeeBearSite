import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TipoEventoMenuEnum } from 'app/models/enum/tipo-evento-menu.enum';
import { Evento } from 'app/models/evento/evento';
import { Permissao } from 'app/models/permissao';
import { EventoService } from 'app/services/evento.service';
import { GeralUtil } from 'app/utils/geral.util';
import { MenuService } from 'app/utils/menu.list';
import { MockRandom } from 'app/utils/mock-random';
import { PermissoesService } from 'app/utils/permissoes.list';
import { ConfirmationService, MenuItem, MessageService } from 'primeng/api';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent {
  name = 'Jane';
  teste = undefined;
  valid = false;

  items: MenuItem[] | undefined;
  items2: MenuItem[] | undefined;
  position: string = 'top';
  positionOptions: any

  home: MenuItem | undefined;

  lista_de_lista_eventos!: ListaDeListaEventos[]

  lista_em_destaque!: Evento[]
  lista_pra_hoje!: Evento[]
  lista_favoritos!: Evento[]
  lista_pra_essa_semana!: Evento[]
  lista_em_breve!: Evento[]
  lista_historico!: Evento[]

  lista_em_destaque_selecteds!: Evento
  lista_pra_hoje_selecteds!: Evento
  lista_favoritos_selecteds!: Evento
  lista_pra_essa_semana_selecteds!: Evento
  lista_em_breve_selecteds!: Evento
  lista_historico_selecteds!: Evento

  tipoEvento!: TipoEventoMenuEnum


  statuses!: any[];
  responsiveOptions;

  dialog: boolean = false;

  submitted: boolean = false;

  private yourIdEvento: string = "";
  @Input() set idEvento(id: string) { this.yourIdEvento = id; }

  constructor(private service: EventoService, private messageService: MessageService, private confirmationService: ConfirmationService, private route: ActivatedRoute, private router: Router) { 
    this.responsiveOptions = MenuService.getResponsiveOptions();
  }

  ngOnInit() {
    this.getEvents();
    this.positionOptions = MenuService.getPositionOptions();

    this.route.params.subscribe(params => {
      this.yourIdEvento = params['id'];
    });


    this.responsiveOptions = [
      {
          breakpoint: '1199px',
          numVisible: 1,
          numScroll: 1
      },
      {
          breakpoint: '991px',
          numVisible: 2,
          numScroll: 1
      },
      {
          breakpoint: '767px',
          numVisible: 1,
          numScroll: 1
      }
  ];

    
  }

  openNew() {
    this.submitted = false; 
    this.dialog = true;
  }


  abrirLink(url: string) {
    this.router.navigate([`${'./eventos/detalhe/' + url}`]);
  }

  acessar(itemId : number) {
    this.router.navigate([`eventos/detalhe/${itemId}`]);
  }

  getFaixaEtariaColorByFaixa(faixa: string) {
    return MockRandom.getFaixaEtariaColorByFaixa(faixa)
  }

  getEvents() {
    this.getAllDestaque()
    this.getAllPraHoje()
    this.getAllFavoritos()
    this.getAllPraEssaSemana()
    this.getAllEmBreve()
    this.getAllHistorico()
    this.lista_de_lista_eventos = []
    this.lista_de_lista_eventos.push({nome: 'Pra Hoje', lista_evento: this.lista_pra_hoje})
    this.lista_de_lista_eventos.push({nome: 'Favoritos', lista_evento: this.lista_favoritos})
    this.lista_de_lista_eventos.push({nome: 'Pra Essa Semana', lista_evento: this.lista_pra_essa_semana})
    this.lista_de_lista_eventos.push({nome: 'Em breve', lista_evento: this.lista_em_breve})
    this.lista_de_lista_eventos.push({nome: 'Histórico', lista_evento: this.lista_historico})
  }

  

  getAllDestaque() {
    this.service.getAllEventosEmDestaque().subscribe(
      data => {
        this.lista_em_destaque = data
      },
      error => {
        // Handle the error in case of failure
        console.error('Error fetching states:', error);
      }
    )
  }

  getAllPraHoje() {
    this.service.getAllEventosOcorrendoHoje().subscribe(
      data => {
        this.lista_pra_hoje = data
      },
      error => {
        // Handle the error in case of failure
        console.error('Error fetching states:', error);
      }
    )
  }

  getAllFavoritos() {
    this.service.getAllEventosFavoritos().subscribe(
      data => {
        this.lista_favoritos = data
      },
      error => {
        // Handle the error in case of failure
        console.error('Error fetching states:', error);
      }
    )
  }

  getAllPraEssaSemana() {
    this.service.getAllEventosOcorrendoEssaSemana().subscribe(
      data => {
        this.lista_pra_essa_semana = data
      },
      error => {
        // Handle the error in case of failure
        console.error('Error fetching states:', error);
      }
    )
  }

  getAllEmBreve() {
    this.service.getAllEventosOcorrendoEmBreve().subscribe(
      data => {
        this.lista_em_breve = data
      },
      error => {
        // Handle the error in case of failure
        console.error('Error fetching states:', error);
      }
    )
  }

  getAllHistorico() {
    this.service.getAllEventosHistorico().subscribe(
      data => {
        this.lista_historico = data
      },
      error => {
        // Handle the error in case of failure
        console.error('Error fetching states:', error);
      }
    )
  }

  eventForMenuItem(evento: Evento): MenuItem {
    return {
      label: evento.nome,
      icon: './assets/images/eventos/' + evento.imagem_principal,
      url: './eventos/detalhe/' + evento.id,
      target: '_self'
    }
  }

  
  
}

class ListaDeListaEventos {
  nome!: string
  lista_evento!: Evento[]
  
}
