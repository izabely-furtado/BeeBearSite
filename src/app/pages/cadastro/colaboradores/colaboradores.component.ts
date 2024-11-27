import { Component } from '@angular/core';
import { Colaborador } from 'app/models/colaborador/colaborador';
import { Contato } from 'app/models/colaborador/contato';
import { TipoPermissaoEnum, TipoPermissaoEnumMock } from 'app/models/enum/tipo-permissao.enum';
import { Login } from 'app/models/usuario/login';
import { Usuario } from 'app/models/usuario/usuario';
import { ColaboradorService } from 'app/services/colaborador.service';
import { GeralUtil } from 'app/utils/geral.util';
import { ConfirmationService, MenuItem, MessageService } from 'primeng/api';

@Component({
  selector: 'app-colaboradores',
  templateUrl: './colaboradores.component.html',
  styleUrls: ['./colaboradores.component.scss']
})
export class ColaboradorComponent {
  items: MenuItem[] | undefined;
  home: MenuItem | undefined;

  colaboradorDialog: boolean = false;
  lista!: Colaborador[];
  item!: Colaborador;
  selecteds!: Colaborador[] | null;

  submitted: boolean = false;

  permissoes: TipoPermissaoEnum[] = TipoPermissaoEnumMock.getMockArray();

  constructor(private service: ColaboradorService, private messageService: MessageService, private confirmationService: ConfirmationService) { }

  ngOnInit() {
    this.items = [{ label: 'Cadastro', url: './cadastro', target: '_self'}, { label: 'Colaborador' }];

    this.home = { icon: 'pi pi-home', routerLink: '/' };

    this.getAll();
  }

  openNew() {
    this.submitted = false;
    this.item = {} as Colaborador;
    this.item.usuario = {} as Usuario;
    this.item.usuario.contato = {} as Contato;
    this.item.usuario.login = {} as Login;

    this.colaboradorDialog = true;
  }

  getAll() {
    this.service.getAllColaboradors().subscribe(
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

  edit(item: Colaborador) {
    this.item = { ...item };
    //fazer o check nos itens existentes no enum do item
    this.colaboradorDialog = true;
  }

  delete(item: Colaborador) {
    this.confirmationService.confirm({
      message: 'Você tem certeza que deseja deletar ' + item.usuario.nome + '?',
      header: 'Confirmar',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.lista = this.lista.filter((val) => val.id !== item.id);
        this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: 'Item Deletado', life: 3000 });
      }
    });
  }

  hideDialog() {
    this.colaboradorDialog = false;
    this.submitted = false;
  }

  save() {
    this.submitted = true;

    if (this.item.usuario.nome?.trim()) {
      if (this.item.id) {
        this.lista[this.findIndexById(this.item.id)] = this.item;
        this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: 'Item Atualizado', life: 3000 });
      } else {
        this.item.id = GeralUtil.createId();
        this.lista.push(this.item);
        this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: 'Item Criado', life: 3000 });
      }

      this.lista = [...this.lista];
      this.colaboradorDialog = false;
    }
  }

  findIndexById(id: string): number {
    let index = -1;
    for (let i = 0; i < this.lista.length; i++) {
      if (this.lista[i].id === id) {
        index = i;
        break;
      }
    }

    return index;
  }
}
