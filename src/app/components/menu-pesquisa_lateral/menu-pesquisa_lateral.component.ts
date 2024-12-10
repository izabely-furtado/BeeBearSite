import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Estado } from 'app/models/endereco/estado';
import { TipoEventoMenuEnum } from 'app/models/enum/tipo-evento-menu.enum';
import { TipoEventoEnum, TipoEventoEnumMock } from 'app/models/enum/tipo-evento.enum';
import { Evento } from 'app/models/evento/evento';
import { Pesquisa } from 'app/models/pesquisa';
import { Usuario } from 'app/models/usuario/usuario';
import { EnderecoService } from 'app/services/endereco.service';
import { EventoService } from 'app/services/evento.service';
import { EstadoService } from 'app/utils/estado.list';
import { MenuService } from 'app/utils/menu.list';
import { MockRandom } from 'app/utils/mock-random';
import { ConfirmationService, MenuItem, MessageService  } from 'primeng/api';

@Component({
  selector: 'app-menu-pesquisa_lateral',
  templateUrl: './menu-pesquisa_lateral.component.html',
  styleUrls: ['./menu-pesquisa_lateral.component.scss']
})
export class MenuPesquisaLateralComponent {
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
      this.pesquisa = {} as Pesquisa
      
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
 