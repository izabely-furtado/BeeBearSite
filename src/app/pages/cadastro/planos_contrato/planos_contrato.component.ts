import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlanoContratado, PlanoContratadoMock } from 'app/models/empresa/plano-contratado';
import { TipoPlanoContratadoEnum } from 'app/models/enum/tipo-plano-contratado.enum';
import { PlanoContratadoService } from 'app/services/plano_contratado.service';
import { ConfirmationService, MenuItem, MessageService } from 'primeng/api';

@Component({
  selector: 'app-planos_contrato',
  templateUrl: './planos_contrato.component.html',
  styleUrls: ['./planos_contrato.component.scss']
})
export class PlanoContratoComponent {
  name = 'Jane';
  teste = undefined;
  valid = false;
  dialog: boolean = false

  item?: PlanoContratado;
  items: MenuItem[] | undefined;
  lista?: PlanoContratado[]
  selecteds!: PlanoContratado[] | null;

  planosPossiveis?: PlanoContratado[]

  showDetalhePlano: boolean = false;

    home: MenuItem | undefined;
    constructor(private service: PlanoContratadoService, private messageService: MessageService, private confirmationService: ConfirmationService, private route: ActivatedRoute, private router: Router) {
      this.getItem(1);
     }

    ngOnInit() {
      this.items = [{ label: 'Cadastro', url: './cadastro', target: '_self'}, { label: 'Planos Contratado' }];

      this.home = { icon: 'pi pi-home', routerLink: '/' };

      this.planosPossiveis = [PlanoContratadoMock.getMockIniciante(), PlanoContratadoMock.getMockIntermediario(), PlanoContratadoMock.getMockAvancado()]
      this.getAll() 
        
    }

    getAll() {
      this.service.getAllPlanoContratadosTrio().subscribe(
        data => {
          this.lista = data
        },
        error => {
          // Handle the error in case of failure
          console.error('Error fetching states:', error);
        }
      )
    }

    edit(item: PlanoContratado) {
      this.item = { ...item };
      this.dialog = true;
    }

    getItem(idEmpresa: number) {
      this.service.getPlanoContratadoById(+idEmpresa).subscribe(
        data => {
          this.item = data
        },
        error => {
          // Handle the error in case of failure
          console.error('Error fetching states:', error);
        }
      )
    }

    validate() {
      if (this.teste == null) {
        this.valid = true;
      }
      else {
        this.valid = false;
      }
    }

    verDetalhesPlano() {
      this.showDetalhePlano = !this.showDetalhePlano
    }

    getTipoStarter(item: PlanoContratado): boolean {
      return item?.tipo == TipoPlanoContratadoEnum.iniciante
    }

    getTipoPro(item: PlanoContratado): boolean {
      return item?.tipo == TipoPlanoContratadoEnum.intermediário
    }

    getTipoPremium(item: PlanoContratado): boolean {
      return item?.tipo == TipoPlanoContratadoEnum.avançado
    }

    openNew() {
      this.dialog = true;
    }

    jaPossuiPlano(tipo : TipoPlanoContratadoEnum): boolean{
      return this.item?.tipo != tipo
    }

    
}
