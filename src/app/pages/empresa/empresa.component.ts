import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Empresa } from 'app/models/empresa/empresa';
import { EmpresaService } from 'app/services/empresa.service';
import { ConfirmationService, MenuItem, MessageService } from 'primeng/api';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.scss']
})
export class EmpresaComponent {
  name = 'Jane';
  teste = undefined;
  valid = false;

  item?: Empresa;
  items: MenuItem[] | undefined;

    home: MenuItem | undefined;
    constructor(private service: EmpresaService, private messageService: MessageService, private confirmationService: ConfirmationService, private route: ActivatedRoute, private router: Router) {
      this.getItem(1);
     }

    ngOnInit() {
        this.items = [{ label: 'Empresa' }];

        this.home = { icon: 'pi pi-home', routerLink: '/' };
        
        
    }

    getItem(idEmpresa: number) {
      this.service.getEmpresaById(+idEmpresa).subscribe(
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

    openEndereco() {
      this.router.navigate([`cadastro/enderecos`]);
    }

    openContatos() {
      this.router.navigate([`cadastro/contato`]);
    }

    openLotesIngressos() {
      this.router.navigate([`cadastro/lotes_ingressos`]);
    }

    openProdutos() {
      this.router.navigate([`cadastro/produtos`]);
    }

    openColaboradores() {
      this.router.navigate([`cadastro/colaboradores`]);
    }

    openParceiros() {
      this.router.navigate([`cadastro/parceiros`]);
    }

    openRegras() {
      this.router.navigate([`cadastro/regras`]);
    }

    openCupons() {
      this.router.navigate([`cadastro/cupons`]);
    }

    openEventos() {
      this.router.navigate([`cadastro/eventos`]);
    }
}
