import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'app/models/empresa/cliente';
import { ClienteService } from 'app/services/cliente.service';
import { ConfirmationService, MenuItem, MessageService } from 'primeng/api';

@Component({
  selector: 'app-clientes_detalhe',
  templateUrl: './clientes_detalhe.component.html',
  styleUrls: ['./clientes_detalhe.component.scss']
})
export class ClientesDetalheComponent {
  name = 'Jane';
  teste = undefined;
  valid = false;

  item?: Cliente;
  items: MenuItem[] | undefined;

  home: MenuItem | undefined;
  
  private yourId: string = "";
  @Input() set id(id: string) { this.yourId = id; }

  constructor(private service: ClienteService, private messageService: MessageService, private confirmationService: ConfirmationService, private route: ActivatedRoute, private router: Router) {
      this.getItem(1);
     }

    ngOnInit() {

      this.route.params.subscribe(params => {
        this.yourId = params['id'];
      });
  
      
    }

    getItem(idCliente: number) {
      this.service.getClienteById(+idCliente).subscribe(
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
