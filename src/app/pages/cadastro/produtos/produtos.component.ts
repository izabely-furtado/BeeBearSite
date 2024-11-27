import { Component } from '@angular/core';
import { SituacaoEstoqueEnum, SituacaoEstoqueEnumMock } from 'app/models/enum/situacao-estoque.enum';
import { TipoProdutoEnum, TipoProdutoEnumMock } from 'app/models/enum/tipo-produto.enum';
import { Produto } from 'app/models/produto/produto';
import { ProdutoService } from 'app/services/produto.service';
import { GeralUtil } from 'app/utils/geral.util';
import { ConfirmationService, MenuItem, MessageService } from 'primeng/api';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss']
})
export class ProdutoComponent {
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

    this.getAll();
  }

  openNew() {
    this.submitted = false;
    this.item = {} as Produto;
    this.productDialog = true;
  }

  getAll() {
    this.service.getAllProdutos().subscribe(
      data => {
        this.lista = data
      },
      error => {
        // Handle the error in case of failure
        console.error('Error fetching states:', error);
      }
    )
  }

  deleteSelecteds() {
    this.confirmationService.confirm({
      message: 'Você tem certeza que deseja deletar selecionados?',
      header: 'Confirmar',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.lista = this.lista.filter((val) => !this.selecteds?.includes(val));
        this.selecteds = null;
        this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: 'Item(ns) Deletado(s)', life: 3000 });
      }
    });
  }

  edit(item: Produto) {
    this.item = { ...item };
    this.productDialog = true;
  }

  delete(item: Produto) {
    this.confirmationService.confirm({
      message: 'Você tem certeza que deseja deletar ' + item.nome + '?',
      header: 'Confirmar',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.lista = this.lista.filter((val) => val.id !== item.id);
        this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: 'Item Deletado', life: 3000 });
      }
    });
  }

  hideDialog() {
    this.productDialog = false;
    this.submitted = false;
  }

  save() {
    this.submitted = true;

    if (this.item.nome?.trim()) {
      if (this.item.id) {
        this.lista[this.findIndexById(this.item.id + '')] = this.item;
        this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: 'Item Atualizado', life: 3000 });
      } else {
        this.item.id = +GeralUtil.createId();
        this.item.imagem = 'product-placeholder.svg';
        this.lista.push(this.item);
        this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: 'Item Criado', life: 3000 });
      }

      this.lista = [...this.lista];
      this.productDialog = false;
    }
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
