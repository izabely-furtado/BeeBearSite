import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Faturamento, FaturamentoMock } from 'app/models/faturamento/faturamento';
import { FaturamentoItem } from 'app/models/faturamento/faturamento_item';
import { ColaboradorService } from 'app/services/colaborador.service';
import { FaturamentoService } from 'app/utils/faturamento.list';
import { ConfirmationService, MenuItem, MessageService } from 'primeng/api';

@Component({
  selector: 'app-geral_faturamento',
  templateUrl: './geral_faturamento.component.html',
  styleUrls: ['./geral_faturamento.component.scss']
})
export class GeralFaturamentoComponent {
  items: MenuItem[] | undefined;
  home: MenuItem | undefined;

  dialog: boolean = false;
  lista!: Faturamento[];
  item!: Faturamento;

  listaCategoria!: Faturamento[];
  itemCategoria!: Faturamento;
  itemQuantidadeValor!: string;
  data_inicio!: Date;
  data_final!: Date;
 
  submitted: boolean = false;

  editando: boolean = false;
  private yourIdTipo: string = "";
  @Input() set idTipo(id: string) { this.yourIdTipo = id; }

  data: any;

    options: any;


  constructor(private service: ColaboradorService, private messageService: MessageService, private confirmationService: ConfirmationService, private route: ActivatedRoute) { 
    
   }

  ngOnInit() {

    this.items = [{ label: 'Faturamento', url: './faturamento', target: '_self'}, { label: "Geral" }];

    this.home = { icon: 'pi pi-home', routerLink: '/' };

    this.listaCategoria = FaturamentoService.getItemsGeral()

        
  }

  openNew() {
    this.submitted = false;
    this.dialog = true;
  }

  getEvents() {
    // this.item = FaturamentoService.getItemsNoTempoEventos()
    this.item = FaturamentoMock.getMock()
    this.options =FaturamentoService.getOptionsGeral()
    this.data = this.getData();
    
  }

  getValoresIngressos(): number[] {
    var retorno: number[] = []
    if (this.item.itens_ingressos != null) {
      for (var faturamentoItem of this.item.itens_ingressos) {
        if (this.itemQuantidadeValor == 'Valor') {
          retorno.push(faturamentoItem.valor)
        }
        if (this.itemQuantidadeValor == 'Quantidade') {
          retorno.push(faturamentoItem.quantidade)
        }
      }
    }
    return retorno
  }

  getValoresProdutos(): number[] {
    var retorno: number[] = []
    if (this.item.itens_produtos != null) {
      for (var faturamentoItem of this.item.itens_produtos) {
        if (this.itemQuantidadeValor == 'Valor') {
          retorno.push(faturamentoItem.valor)
        }
        if (this.itemQuantidadeValor == 'Quantidade') {
          retorno.push(faturamentoItem.quantidade)
        }
      }
    }
    return retorno
  }

  getSaibaMais(item: Faturamento) {
    this.item = item
    this.dialog = true
  } 

  getData() {
    if (this.itemCategoria.titulo == 'Totais'){
      return FaturamentoService.getDataGeral(this.getValoresIngressos(), this.getValoresProdutos())
    }
    if (this.itemCategoria.titulo == 'Venda de Ingressos'){
      return FaturamentoService.getDataGeralIngressos(this.getValoresIngressos())
    }
    if (this.itemCategoria.titulo == 'Venda de Produtos') {
      return FaturamentoService.getDataGeralProdutos(this.getValoresProdutos())
    }
  }

  acessar(itemInterno : FaturamentoItem) {
    //redirecionar para o elemento verificando o tipo em item
  }

}
