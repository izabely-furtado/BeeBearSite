import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Estado } from 'app/models/endereco/estado';
import { TipoEventoMenuEnum } from 'app/models/enum/tipo-evento-menu.enum';
import { TipoEventoEnum, TipoEventoEnumMock } from 'app/models/enum/tipo-evento.enum';
import { Erro } from 'app/models/erro/erro';
import { Evento } from 'app/models/evento/evento';
import { Pesquisa } from 'app/models/pesquisa';
import { Usuario } from 'app/models/usuario/usuario';
import { EnderecoService } from 'app/services/endereco.service';
import { EventoService } from 'app/services/evento.service';
import { UsuarioService } from 'app/services/usuario.service';
import { EstadoService } from 'app/utils/estado.list';
import { MenuService } from 'app/utils/menu.list';
import { MockRandom } from 'app/utils/mock-random';
import { ConfirmationService, MenuItem, MessageService } from 'primeng/api';
// const cidades = require('cidades-promise'); //https://www.npmjs.com/package/cidades-promise

@Component({
  selector: 'app-programacao',
  templateUrl: './programacao.component.html',
  styleUrls: ['./programacao.component.scss']
})
export class ProgramacaoComponent {
  name = 'Jane';
  teste = undefined;
  valid = false;

  item?: Usuario;
  items: MenuItem[] | undefined;
  position: string = 'top';
  positionOptions: any
  
  estados: Estado[] = EstadoService.getLista()
  selectedEstados!: Estado[]
  cidades: string[] = [];
  rangeValues: number[] = [20, 80];

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

  pesquisa!: Pesquisa
  
  statuses!: any[];
  responsiveOptions;

  dialog: boolean = false;

  submitted: boolean = false;

  desabilite18: boolean = false;
  desabilite16: boolean = false;
  desabilite14: boolean = false;
  desabilite12: boolean = false;
  desabilite10: boolean = false;
  desabiliteL: boolean = false;

  tipos_de_evento: TipoEventoEnum[] = TipoEventoEnumMock.getLista()
  tipos_de_eventoSelecteds!: TipoEventoEnum[]
  parceiros: MenuItem[] = MenuService.getItemsOptionsParceiros(); 
  parceirosSelecteds!: MenuItem[]

    home: MenuItem | undefined;
    constructor(private serviceEndereco: EnderecoService, private service: EventoService, private messageService: MessageService, private confirmationService: ConfirmationService, private route: ActivatedRoute, private router: Router) { 
      this.responsiveOptions = MenuService.getResponsiveOptions();
    }

    ngOnInit() {
      this.getEvents();
      // this.getCidades();
      this.positionOptions = MenuService.getPositionOptions();
      this.pesquisa = {} as Pesquisa
  
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

    
    updateRange() {
      this.rangeValues = [...this.rangeValues];
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

    // getCidades() {
    //   cidades.getCitiesByState('ES')
    //     .then((res: string[]) => {
    //       this.cidades = res
    //     })
    //     .catch((erro: Erro) => {
    //         window.alert(erro.erro)
    //         return []
    //     })
    // }
  
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
  
    changeDesabitiliteFaixa(faixa: string) {
      if (faixa == '18') this.desabilite18 = !this.desabilite18
      if (faixa == '16') this.desabilite16 = !this.desabilite16
      if (faixa == '14') this.desabilite14 = !this.desabilite14
      if (faixa == '12') this.desabilite12 = !this.desabilite12
      if (faixa == '10') this.desabilite10 = !this.desabilite10
      if (faixa == 'L' ) this.desabiliteL  = !this.desabiliteL
    }
    
  }
  
  class ListaDeListaEventos {
    nome!: string
    lista_evento!: Evento[]
    
  }

function Parceiro(): import("../../models/empresa/parceiro").Parceiro {
  throw new Error('Function not implemented.');
}
 
