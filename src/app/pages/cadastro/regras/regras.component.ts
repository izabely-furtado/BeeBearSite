import { Component, Input } from '@angular/core';
import { Evento } from 'app/models/evento/evento';
import { TipoPermissaoEnum, TipoPermissaoEnumMock } from 'app/models/enum/tipo-permissao.enum';
import { EventoService } from 'app/services/evento.service';
import { GeralUtil } from 'app/utils/geral.util';
import { ConfirmationService, MenuItem, MessageService } from 'primeng/api';
import { ActivatedRoute } from '@angular/router';
import { RegraService } from 'app/services/regras.service';
import { Regra } from 'app/models/regra';
import { TipoOrigemEnum, TipoOrigemEnumMock } from 'app/models/enum/tipo-origem.enum';

@Component({
  selector: 'app-regras',
  templateUrl: './regras.component.html',
  styleUrls: ['./regras.component.scss']
})
export class RegrasComponent {
  items: MenuItem[] | undefined;
  home: MenuItem | undefined;

  regraDialog: boolean = false;
  lista!: Regra[];
  listaEmpresa!: Regra[];
  item!: Regra;
  selecteds!: Regra[] | null;
  listaPermissoes!: TipoPermissaoEnum[];
  selectedsPermissions!: TipoPermissaoEnum[] | null;


  submitted: boolean = false;

  editando: boolean = false;

  private yourIdEmpresa: number = 1;
  private yourIdEvento: string = "";
  @Input() set idEvento(id: string) { this.yourIdEvento = id; }

  constructor(private service: RegraService, private messageService: MessageService, private confirmationService: ConfirmationService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.items = [{ label: 'Cadastro', url: './cadastro', target: '_self'}, { label: 'Regras' }];

    this.home = { icon: 'pi pi-home', routerLink: '/' };
    
    if (this.yourIdEvento != null) {
      this.getAllRegraesEvento();
    }
  }

  openNew() {
    this.submitted = false; 
    this.item = {} as Regra;
    this.regraDialog = true;
  }

  getItem(idRegra: number) {
    this.service.getRegraByIdEventoIdRegra(+this.yourIdEvento, idRegra).subscribe(
      data => {
        this.item = data
      },
      error => {
        // Handle the error in case of failure
        console.error('Error fetching states:', error);
      }
    )
  }

  getAllRegraesEvento() {
    this.service.getAllRegrasEvento(+this.yourIdEvento).subscribe(
      data => {
        this.lista = data
      },
      error => {
        // Handle the error in case of failure
        console.error('Error fetching states:', error);
      }
    )
  }

  getAllRegrasEmpresa(IdEmpresa: number) {
    this.service.getAllRegrasEmpresa(IdEmpresa).subscribe(
      data => {
        this.listaEmpresa = data
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

  edit(item: Regra) {
    this.item = { ...item };
    this.regraDialog = true;
  }

  delete(item: Regra) {
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
    this.regraDialog = false;
    this.submitted = false;
  }

  save() {
    this.submitted = true;

    if ((this.item.id+'')?.trim()) {
      if (this.item.id) {
        this.getAllRegraesEvento();
        this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: 'Item Atualizado', life: 3000 });
      } else {
        this.item.id = +GeralUtil.createId();
        this.lista.push(this.item);
        this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: 'Item Criado', life: 3000 });
      }

      this.lista = [...this.lista];
      this.regraDialog = false;
    }
  }

  getTiposOrigem(): TipoOrigemEnum[] {
    return TipoOrigemEnumMock.getLista();
  }

  changeTipoOrigem(): void {
    if (this.item.origem == TipoOrigemEnum.ja_existente) {
      this.getAllRegrasEmpresa(this.yourIdEmpresa);
      this.editando = false;
    }
    if (this.item.origem == TipoOrigemEnum.novo) {
      this.editando = true;
    }
    else {
      this.editando = false;
    }
  }

  carregaListagem() {
    if (!this.editando && this.lista != null && this.lista.length >= 1 && this.item.origem != null) {
      return true;
    }
    else {
      return false;
    }
  }
  changeRegraEmpresa() {
    if (this.item == null) {
      this.cleanItem();
    }    
    this.item.origem = TipoOrigemEnum.ja_existente;
  }

  openDetalhes(): boolean{
    if (this.item.origem == TipoOrigemEnum.ja_existente) {
        if (this.item.id != null) {
          return true;
        }
        else return false;
    }
    else if (this.item.origem == TipoOrigemEnum.novo) {
      this.cleanItem();
      this.item.origem = TipoOrigemEnum.novo
      return true;
    }
    else {
      return false;
    }
  }

  cleanItem(): void{
    this.item = {} as Regra;
  }


}
