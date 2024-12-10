import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TipoEventoMenuEnum } from 'app/models/enum/tipo-evento-menu.enum';
import { Evento } from 'app/models/evento/evento';
import { Usuario } from 'app/models/usuario/usuario';
import { EnderecoService } from 'app/services/endereco.service';
import { EventoService } from 'app/services/evento.service';
import { UsuarioService } from 'app/services/usuario.service';
import { MenuService } from 'app/utils/menu.list';
import { MockRandom } from 'app/utils/mock-random';
import { ConfirmationService, MenuItem, MessageService } from 'primeng/api';

@Component({
  selector: 'app-pesquisa',
  templateUrl: './pesquisa.component.html',
  styleUrls: ['./pesquisa.component.scss']
})
export class PesquisaComponent {
  name = 'Jane';
  teste = undefined;
  valid = false;

  item?: Usuario;
  items: MenuItem[] | undefined;
  position: string = 'top';
  positionOptions: any
  
  rangeValues: number[] = [20, 80];

  lista_de_lista_eventos!: ListaDeListaEventos[]

  lista_em_breve!: Evento[]
  lista_em_breve_selecteds!: Evento
  
  tipoEvento!: TipoEventoMenuEnum

  statuses!: any[];
  responsiveOptions;

  dialog: boolean = false;

  submitted: boolean = false;

    home: MenuItem | undefined;
    constructor(private serviceEndereco: EnderecoService, private service: EventoService, private messageService: MessageService, private confirmationService: ConfirmationService, private route: ActivatedRoute, private router: Router) { 
      this.responsiveOptions = MenuService.getResponsiveOptions();
    }

    ngOnInit() {
      this.getAllEmBreve();
      // this.getCidades();
      this.positionOptions = MenuService.getPositionOptions();
      
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

function Parceiro(): import("../../models/empresa/parceiro").Parceiro {
  throw new Error('Function not implemented.');
}
 
