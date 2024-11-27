import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Faturamento, FaturamentoMock } from 'app/models/faturamento/faturamento';
import { ColaboradorService } from 'app/services/colaborador.service';
import { FaturamentoService } from 'app/utils/faturamento.list';
import { ConfirmationService, MenuItem, MessageService } from 'primeng/api';

@Component({
  selector: 'app-produtos_faturamento',
  templateUrl: './produtos_faturamento.component.html',
  styleUrls: ['./produtos_faturamento.component.scss']
})
export class ProdutosFaturamentoComponent {
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

  data: any;
  options: any;

  editando: boolean = false;
  private yourIdTipo: string = "";
  @Input() set idTipo(id: string) { this.yourIdTipo = id; }

  constructor(private service: ColaboradorService, private messageService: MessageService, private confirmationService: ConfirmationService, private route: ActivatedRoute) { 
    
   }

  ngOnInit() {

    this.items = [{ label: 'Faturamento', url: './faturamento', target: '_self'}, { label: "Produtos" }];

    this.home = { icon: 'pi pi-home', routerLink: '/' };

    this.listaCategoria = FaturamentoService.getItemsProdutos()

    
  }

  openNew() {
    this.submitted = false;
    this.dialog = true;
  }

  getEvents() {
    // this.item = FaturamentoService.getItemsNoTempoEventos()
    this.item = FaturamentoMock.getMock()
    this.options = FaturamentoService.getOptions();
    const documentStyle = getComputedStyle(document.documentElement);
    this.data = this.getData()
  }

  getLabels(): string[] {
    var retorno: string[] = []
    if (this.item.itens != null) {
      for (var faturamentoItem of this.item.itens) {
        retorno.push(faturamentoItem.nome)
      }
    }
    return retorno
  }

  getValores(): number[] {
    var retorno: number[] = []
    if (this.item.itens != null) {
      for (var faturamentoItem of this.item.itens) {
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

  getData() {
    var label = this.itemQuantidadeValor + ' ';
    return FaturamentoService.getData(label, this.getValores(), this.getLabels())
  }

  getSaibaMais(item: Faturamento) {
    this.item = item
    this.dialog = true
  } 

}
