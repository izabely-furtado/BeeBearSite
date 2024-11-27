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

@Component({
  selector: 'app-cupons',
  templateUrl: './cupons.component.html',
  styleUrls: ['./cupons.component.scss']
})
export class CuponsComponent {
  items: MenuItem[] | undefined;
  home: MenuItem | undefined;

  cupomDialog: boolean = false;
  listaDescontoDialog: boolean = false;
  lista!: Cupom[];
  listaEmpresa!: Cupom[];
  item!: Cupom;
  selecteds!: Cupom[] | null;

  submitted: boolean = false;

  editando: boolean = false;

  permissoes: TipoPermissaoEnum[] = TipoPermissaoEnumMock.getMockArray();

  private yourIdEmpresa: number = 1;
  private yourIdEvento: string = "";
  @Input() set idEvento(id: string) { this.yourIdEvento = id; }

  constructor(private service: CupomService, private messageService: MessageService, private confirmationService: ConfirmationService, private route: ActivatedRoute) { }


  ngOnInit() {
    this.items = [{ label: 'Cadastro', url: './cadastro', target: '_self'}, { label: 'Cupons' }];

    this.home = { icon: 'pi pi-home', routerLink: '/' };

    if (this.yourIdEvento != null) {
      this.getAllCupomesEvento();
    }
  }

  openNew() {
    this.submitted = false; 
    this.item = {} as Cupom;
    this.cupomDialog = true;
  }

  getItem(idCupom: number) {
    this.service.getCupomByIdEventoIdCupom(+this.yourIdEvento, idCupom).subscribe(
      data => {
        this.item = data
      },
      error => {
        // Handle the error in case of failure
        console.error('Error fetching states:', error);
      }
    )
  }

  getAllCupomesEvento() {
    this.service.getAllCupomsEvento(+this.yourIdEvento).subscribe(
      data => {
        this.lista = data
      },
      error => {
        // Handle the error in case of failure
        console.error('Error fetching states:', error);
      }
    )
  }

  getAllCupomsEmpresa(IdEmpresa: number) {
    this.service.getAllCupomsEmpresa(IdEmpresa).subscribe(
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

  edit(item: Cupom) {
    this.item = { ...item };
    this.cupomDialog = true;
  }

  delete(item: Cupom) {
    this.confirmationService.confirm({
      message: 'Você tem certeza que deseja deletar ' + item.codigo + '?',
      header: 'Confirmar',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.lista = this.lista.filter((val) => val.id !== item.id);
        this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: 'Item Deletado', life: 3000 });
      }
    });
  }

  hideDialog() {
    this.cupomDialog = false;
    this.submitted = false;
  }

  save() {
    this.submitted = true;

    if ((this.item.id+'')?.trim()) {
      if (this.item.id) {
        this.getAllCupomesEvento();
        this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: 'Item Atualizado', life: 3000 });
      } else {
        this.item.id = +GeralUtil.createId();
        this.lista.push(this.item);
        this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: 'Item Criado', life: 3000 });
      }

      this.lista = [...this.lista];
      this.cupomDialog = false;
    }
  }

  tipoPorcentagem(item: Cupom): boolean {
    if (item != null && item.desconto != null && item.desconto.tipo != null && item.desconto.tipo == 'Por Porcentagem') {
      return true;
    }
    else {
      return false;
    }
  }

  formatDate(data: Date): string {
    return GeralUtil.formatDate(data);
  }

  openDialogListaDesconto(item : Cupom) {
    this.item = { ...item };
    this.listaDescontoDialog = true
  }


}
