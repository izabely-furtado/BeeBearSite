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
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent {
  name = 'Jane';
  teste = undefined;
  valid = false;

  items: MenuItem[] | undefined;
  items2: MenuItem[] | undefined;
  position: string = 'top';
  positionOptions: any

  home: MenuItem | undefined;

  lista_com_pendencias!: Evento[]
  lista_ocorrendo_hoje!: Evento[]
  lista_mais_acessados!: Evento[]
  lista_iniciados!: Evento[]
  lista_finalizados!: Evento[]
  lista_cancelados!: Evento[]

  lista_com_pendencias_selecteds!: Evento
  lista_ocorrendo_hoje_selecteds!: Evento
  lista_mais_acessados_selecteds!: Evento
  lista_iniciados_selecteds!: Evento
  lista_finalizados_selecteds!: Evento
  lista_cancelados_selecteds!: Evento

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
    this.items = [{ label: 'Eventos' }];

    this.home = { icon: 'pi pi-home', routerLink: '/' };

    this.items2 = MenuService.getItemsMenuEventos();
    this.positionOptions = MenuService.getPositionOptions();

    this.route.params.subscribe(params => {
      this.yourIdEvento = params['id'];
    });

    this.getEvents()

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
    this.router.navigate([`eventos/tipo/${url}`]);
  }

  getEventsOld() {
    if (this.tipoEvento == TipoEventoMenuEnum.com_pendencias) {
      this.getAllComPendencias()
    }
    if (this.tipoEvento == TipoEventoMenuEnum.ocorrendo_hoje) {
      this.getAllOcorrendoHoje()
    }
    if (this.tipoEvento == TipoEventoMenuEnum.mais_acessados) {
      this.getAllMaisAcessados()
    }
    if (this.tipoEvento == TipoEventoMenuEnum.iniciados) {
      this.getAllIniciados()
    }
    if (this.tipoEvento == TipoEventoMenuEnum.finalizados) {
      this.getAllFinalizados()
    }
    if (this.tipoEvento == TipoEventoMenuEnum.cancelados) {
      this.getAllCancelados()
    }
  }

  getEvents() {
    this.getAllComPendencias()
    this.getAllOcorrendoHoje()
    this.getAllMaisAcessados()
    this.getAllIniciados()
    this.getAllFinalizados()
    this.getAllCancelados()
  }

  getAllComPendencias() {
    this.service.getAllEventosComPendencia().subscribe(
      data => {
        this.lista_com_pendencias = data
      },
      error => {
        // Handle the error in case of failure
        console.error('Error fetching states:', error);
      }
    )
  }

  getAllOcorrendoHoje() {
    this.service.getAllEventosOcorrendoHoje().subscribe(
      data => {
        this.lista_ocorrendo_hoje = data
      },
      error => {
        // Handle the error in case of failure
        console.error('Error fetching states:', error);
      }
    )
  }

  getAllMaisAcessados() {
    this.service.getAllEventosMaisAcessados().subscribe(
      data => {
        this.lista_mais_acessados = data
      },
      error => {
        // Handle the error in case of failure
        console.error('Error fetching states:', error);
      }
    )
  }

  getAllIniciados() {
    this.service.getAllEventosIniciados().subscribe(
      data => {
        this.lista_iniciados = data
      },
      error => {
        // Handle the error in case of failure
        console.error('Error fetching states:', error);
      }
    )
  }

  getAllFinalizados() {
    this.service.getAllEventosFinalizados().subscribe(
      data => {
        this.lista_finalizados = data
      },
      error => {
        // Handle the error in case of failure
        console.error('Error fetching states:', error);
      }
    )
  }

  getAllCancelados() {
    this.service.getAllEventosCancelados().subscribe(
      data => {
        this.lista_cancelados = data
      },
      error => {
        // Handle the error in case of failure
        console.error('Error fetching states:', error);
      }
    )
  }

  acessar(itemId : number) {
    this.router.navigate([`cadastro/eventos/detalhe/${itemId}`]);
  }

  getFaixaEtariaColorByFaixa(faixa: string) {
    return MockRandom.getFaixaEtariaColorByFaixa(faixa)
  }

  abrirLinkComPendencias() {
    this.router.navigate([`eventos/tipo/Com Pendências`]);
  }

  abrirLinkOcorrendoHoje() {
    this.router.navigate([`eventos/tipo/Ocorrendo Hoje`]);
  }

  abrirLinkMaisAcessados() {
    this.router.navigate([`eventos/tipo/Mais Acessados`]);
  }

  abrirLinkIniciados() {
    this.router.navigate([`eventos/tipo/Iniciados`]);
  }

  abrirLinkFinalizados() {
    this.router.navigate([`eventos/tipo/Finalizados`]);
  }

  abrirLinkCancelados() {
    this.router.navigate([`eventos/tipo/Cancelados`]);
  }
  

}
