import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TipoEventoMenuEnum } from 'app/models/enum/tipo-evento-menu.enum';
import { Evento } from 'app/models/evento/evento';
import { Usuario } from 'app/models/usuario/usuario';
import { EnderecoService } from 'app/services/endereco.service';
import { EventoService } from 'app/services/evento.service';
import { ParceiroService } from 'app/services/parceiro.service';
import { UsuarioService } from 'app/services/usuario.service';
import { MenuService } from 'app/utils/menu.list';
import { MockRandom } from 'app/utils/mock-random';
import { ConfirmationService, MenuItem, MessageService } from 'primeng/api';
import { Parceiro } from '../../models/empresa/parceiro';
import { AreaAtuacaoEnum } from 'app/models/enum/area-atuacao.enum';
import { EmpresaService } from 'app/services/empresa.service';
import { Empresa } from 'app/models/empresa/empresa';

@Component({
  selector: 'app-parceiros',
  templateUrl: './parceiros.component.html',
  styleUrls: ['./parceiros.component.scss']
})
export class ParceirosComponent {
  name = 'Jane';
  teste = undefined;
  valid = false;

  item?: Usuario;
  items: MenuItem[] | undefined;
  position: string = 'top';
  positionOptions: any
  
  rangeValues: number[] = [20, 80];

  lista!: Empresa[]
  lista_selecteds!: Empresa
  
  statuses!: any[];
  responsiveOptions;

  dialog: boolean = false;

  submitted: boolean = false;

    home: MenuItem | undefined;
    constructor(private service: EmpresaService, private messageService: MessageService, private confirmationService: ConfirmationService, private route: ActivatedRoute, private router: Router) { 
      this.responsiveOptions = MenuService.getResponsiveOptions();
    }

    ngOnInit() {
      this.getAllParceiros();
      console.log(this.lista)
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

    getAllParceiros() {
      this.service.getAllEmpresas().subscribe(
        data => {
          this.lista = data
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
 
