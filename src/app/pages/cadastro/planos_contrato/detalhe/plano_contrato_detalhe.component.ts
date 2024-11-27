import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlanoContratado, PlanoContratadoMock } from 'app/models/empresa/plano-contratado';
import { TipoPlanoContratadoEnum } from 'app/models/enum/tipo-plano-contratado.enum';
import { PlanoContratadoService } from 'app/services/plano_contratado.service';
import { ConfirmationService, MenuItem, MessageService } from 'primeng/api';

@Component({
  selector: 'app-plano_contrato_detalhe',
  templateUrl: './plano_contrato_detalhe.component.html',
  styleUrls: ['./plano_contrato_detalhe.component.scss']
})
export class PlanoContratoDetalheComponent {
  name = 'Jane';
  teste = undefined;
  valid = false;
  dialog: boolean = false

  item?: PlanoContratado;
  items: MenuItem[] | undefined;

  planosPossiveis?: PlanoContratado[]

  showDetalhePlano: boolean = false;

    home: MenuItem | undefined;
    constructor(private service: PlanoContratadoService, private messageService: MessageService, private confirmationService: ConfirmationService, private route: ActivatedRoute, private router: Router) {
      this.getItem(1);
     }

    ngOnInit() {
        this.items = [{ label: 'Plano Contratado' }];

        this.home = { icon: 'pi pi-home', routerLink: '/' };

        this.planosPossiveis = [PlanoContratadoMock.getMockIniciante(), PlanoContratadoMock.getMockIntermediario(), PlanoContratadoMock.getMockAvancado()]
        
        
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

    openNew() {
      this.dialog = true;
    }

    jaPossuiPlano(tipo : TipoPlanoContratadoEnum): boolean{
      return this.item?.tipo != tipo
    }

    
}
