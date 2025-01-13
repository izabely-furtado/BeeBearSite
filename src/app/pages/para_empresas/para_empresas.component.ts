import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'app/models/empresa/cliente';
import { Empresa } from 'app/models/empresa/empresa';
import { PlanoContratado, PlanoContratadoMock } from 'app/models/empresa/plano-contratado';
import { TipoPlanoContratadoEnum } from 'app/models/enum/tipo-plano-contratado.enum';
import { Evento } from 'app/models/evento/evento';
import { Usuario } from 'app/models/usuario/usuario';
import { EmpresaService } from 'app/services/empresa.service';
import { UsuarioService } from 'app/services/usuario.service';
import { MenuService } from 'app/utils/menu.list';
import { MockRandom } from 'app/utils/mock-random';
import { ConfirmationService, MenuItem, MessageService } from 'primeng/api';

@Component({
  selector: 'app-para_empresas',
  templateUrl: './para_empresas.component.html',
  styleUrls: ['./para_empresas.component.scss']
})
export class ParaEmpresasComponent {
  name = 'Jane';
    teste = undefined;
    valid = false;
  
    item?: Cliente;
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
    planosPossiveis?: PlanoContratado[]

    activeIndex: number | undefined = -1;
  
      home: MenuItem | undefined;
      constructor(private service: EmpresaService, private messageService: MessageService, private confirmationService: ConfirmationService, private route: ActivatedRoute, private router: Router) { 
        this.responsiveOptions = MenuService.getResponsiveOptions();
        this.planosPossiveis = [PlanoContratadoMock.getMockIniciante(), PlanoContratadoMock.getMockIntermediario(), PlanoContratadoMock.getMockAvancado()]
      }
  
      ngOnInit() {
        this.getAllParceiros();
        console.log(this.planosPossiveis)
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
      

    activeIndexChange(index : number){
        this.activeIndex = index
    }

      getTipoStarter(): boolean {
        return this.item?.plano_contratado?.tipo == TipoPlanoContratadoEnum.iniciante
      }
  
      getTipoPro(): boolean {
        return this.item?.plano_contratado?.tipo == TipoPlanoContratadoEnum.intermediário
      }
  
      getTipoPremium(): boolean {
        return this.item?.plano_contratado?.tipo == TipoPlanoContratadoEnum.avançado
      }

      jaPossuiPlano(tipo : TipoPlanoContratadoEnum): boolean{
        return this.item?.plano_contratado?.tipo != tipo
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
   
  