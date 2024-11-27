import { Component } from '@angular/core';
import { SituacaoEstoqueEnum, SituacaoEstoqueEnumMock } from 'app/models/enum/situacao-estoque.enum';
import { TipoProdutoEnum, TipoProdutoEnumMock } from 'app/models/enum/tipo-produto.enum';
import { Produto } from 'app/models/produto/produto';
import { ProdutoService } from 'app/services/produto.service';
import { GeralUtil } from 'app/utils/geral.util';
import { ConfirmationService, MenuItem, MessageService } from 'primeng/api';

@Component({
  selector: 'app-produto_detalhe',
  templateUrl: './produto_detalhe.component.html',
  styleUrls: ['./produto_detalhe.component.scss']
})
export class ProdutoDetalheComponent {
  items: MenuItem[] | undefined;
  home: MenuItem | undefined;

  productDialog: boolean = false;
  lista!: Produto[];
  item!: Produto;
  selecteds!: Produto[] | null;

  submitted: boolean = false;

  statuses: SituacaoEstoqueEnum[] = SituacaoEstoqueEnumMock.getMockArray();
  tipos: TipoProdutoEnum[] = TipoProdutoEnumMock.getMockArray();

  constructor(private service: ProdutoService, private messageService: MessageService, private confirmationService: ConfirmationService) { }

  ngOnInit() {
    this.items = [{ label: 'Cadastro', url: './cadastro', target: '_self'}, { label: 'Produtos' }];

    this.home = { icon: 'pi pi-home', routerLink: '/' };

    this.getItem(1);
  }

  openNew() {
    this.submitted = false;
    this.item = {} as Produto;
    this.productDialog = true;
  }

  getItem(idRegra: number) {
    this.service.getProdutoById(idRegra).subscribe(
      data => {
        this.item = data
      },
      error => {
        // Handle the error in case of failure
        console.error('Error fetching states:', error);
      }
    )
  }

  
  findIndexById(id: string): number {
    let index = -1;
    for (let i = 0; i < this.lista.length; i++) {
      if (this.lista[i].id === +id) {
        index = i;
        break;
      }
    }

    return index;
  }
}
