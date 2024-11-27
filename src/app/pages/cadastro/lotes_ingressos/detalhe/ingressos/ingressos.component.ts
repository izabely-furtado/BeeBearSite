import { Component, Input } from '@angular/core';
import { Evento } from 'app/models/evento/evento';
import { TipoPermissaoEnum, TipoPermissaoEnumMock } from 'app/models/enum/tipo-permissao.enum';
import { EventoService } from 'app/services/evento.service';
import { GeralUtil } from 'app/utils/geral.util';
import { ConfirmationService, MenuItem, MessageService } from 'primeng/api';
import { ActivatedRoute } from '@angular/router';
import { TipoEventoEnum, TipoEventoEnumMock } from 'app/models/enum/tipo-evento.enum';
import { StatusEventoEnumMock } from 'app/models/enum/status-evento.enum';
import { EnderecoService } from 'app/services/endereco.service';
import { Endereco } from 'app/models/endereco/endereco';
import { Cupom } from 'app/models/desconto/cupom';
import { CupomService } from 'app/services/cupons.service';
import { TipoDescontoEnum } from 'app/models/enum/tipo-desconto.enum';
import { Ingresso } from 'app/models/produto/ingresso/ingresso';
import { IngressoService } from 'app/services/ingresso.service';

@Component({
  selector: 'app-ingressos',
  templateUrl: './ingressos.component.html',
  styleUrls: ['./ingressos.component.scss']
})
export class IngressosComponent {
  items: MenuItem[] | undefined;
  home: MenuItem | undefined;

  detalheDialog: boolean = false;
  regrasDialog: boolean = false;
  editando: boolean = false;
  novo: boolean = false;
  item!: Ingresso;
  lista!: Ingresso[];
  selecteds!: Ingresso[] | null;
  submitted: boolean = false;

  private yourIdEmpresa: number = 1;
  private yourIdEvento: string = "";
  private yourIdLote: string = "1";
  @Input() set idEvento(id: string) { this.yourIdEvento = id; }
  @Input() set idLote(id: string) { this.yourIdLote = id; }

  constructor(private service: IngressoService, private messageService: MessageService, private confirmationService: ConfirmationService, private route: ActivatedRoute) { }


  ngOnInit() {
    if (this.yourIdLote != null) {
      this.getAllIngressosLote(+this.yourIdLote);
    }
    this.getAllIngressosLote(+this.yourIdLote);
  }

  openNew() {
    this.submitted = false; 
    this.item = {} as Ingresso;
    this.detalheDialog = true;
  }

  getItem(idIngresso: number) {
    this.service.getIngressoById(idIngresso).subscribe(
      data => {
        this.item = data
      },
      error => {
        // Handle the error in case of failure
        console.error('Error fetching states:', error);
      }
    )
  }

  getAllIngressosLote(IdLote: number) {
    this.service.getAllIngressosLote(IdLote).subscribe(
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

  editRegras(item: Ingresso) {
    this.item = { ...item };
    this.regrasDialog = true;
  }

  edit(item: Ingresso) {
    this.item = { ...item };
    this.detalheDialog = true;
  }

  delete(item: Ingresso) {
    this.confirmationService.confirm({
      message: 'Você tem certeza que deseja deletar ' + item.id + '?',
      header: 'Confirmar',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.lista = this.lista.filter((val) => val.id !== item.id);
        this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: 'Item Deletado', life: 3000 });
      }
    });
  }

  hideDialog() {
    this.regrasDialog = false;
    this.detalheDialog = false;
    this.submitted = false;
  }

  save() {
    this.submitted = true;

    if ((this.item.id+'')?.trim()) {
      if (this.item.id) {
        this.getAllIngressosLote(+this.yourIdLote);
        this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: 'Item Atualizado', life: 3000 });
      } else {
        this.item.id = +GeralUtil.createId();
        this.lista.push(this.item);
        this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: 'Item Criado', life: 3000 });
      }

      this.lista = [...this.lista];
      this.regrasDialog = false;
    }
  }

  formatDate(data: Date): string {
    return GeralUtil.formatDate(data);
  }

}
