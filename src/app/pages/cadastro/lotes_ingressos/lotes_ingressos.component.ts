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
import { Lote } from 'app/models/produto/ingresso/lote';
import { LoteService } from 'app/services/lote.service';

@Component({
  selector: 'app-lotes_ingressos',
  templateUrl: './lotes_ingressos.component.html',
  styleUrls: ['./lotes_ingressos.component.scss']
})
export class LotesIngressosComponent {
  items: MenuItem[] | undefined;
  home: MenuItem | undefined;

  detalheDialog: boolean = false;
  ingressosDialog: boolean = false;
  editando: boolean = false;
  novo: boolean = false;
  item!: Lote;
  lista!: Lote[];
  listaEmpresa!: Lote[];
  selecteds!: Lote[] | null;
  submitted: boolean = false;

  private yourIdEmpresa: number = 1;
  private yourIdEvento: string = "";
  @Input() set idEvento(id: string) { this.yourIdEvento = id; }

  constructor(private service: LoteService, private messageService: MessageService, private confirmationService: ConfirmationService, private route: ActivatedRoute) { }

  
  ngOnInit() {

    this.items = [{ label: 'Cadastro', url: './cadastro', target: '_self'}, { label: 'Lotes/Ingressos' }];

    this.home = { icon: 'pi pi-home', routerLink: '/' };

    if (this.yourIdEvento != null) {
      this.getAllLoteesEvento();
    }
  }

  openNew() {
    this.submitted = false; 
    this.item = {} as Lote;
    this.detalheDialog = true;
  }

  getItem(idLote: number) {
    this.service.getLoteByIdEventoIdLote(+this.yourIdEvento, idLote).subscribe(
      data => {
        this.item = data
      },
      error => {
        // Handle the error in case of failure
        console.error('Error fetching states:', error);
      }
    )
  }

  getAllLoteesEvento() {
    this.service.getAllLotesEvento(+this.yourIdEvento).subscribe(
      data => {
        this.lista = data
      },
      error => {
        // Handle the error in case of failure
        console.error('Error fetching states:', error);
      }
    )
  }

  getAllLotesEmpresa(IdEmpresa: number) {
    this.service.getAllLotesEmpresa(IdEmpresa).subscribe(
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

  editIngressos(item: Lote) {
    this.item = { ...item };
    this.ingressosDialog = true;
  }

  edit(item: Lote) {
    this.item = { ...item };
    this.detalheDialog = true;
  }

  delete(item: Lote) {
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
    this.ingressosDialog = false;
    this.detalheDialog = false;
    this.submitted = false;
  }

  save() {
    this.submitted = true;

    if ((this.item.id+'')?.trim()) {
      if (this.item.id) {
        this.getAllLoteesEvento();
        this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: 'Item Atualizado', life: 3000 });
      } else {
        this.item.id = +GeralUtil.createId();
        this.lista.push(this.item);
        this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: 'Item Criado', life: 3000 });
      }

      this.lista = [...this.lista];
      this.ingressosDialog = false;
    }
  }

  formatDate(data: Date): string {
    return GeralUtil.formatDate(data);
  }


}
