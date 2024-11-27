import { Component, Input } from '@angular/core';
import { Evento } from 'app/models/evento/evento';
import { TipoPermissaoEnum, TipoPermissaoEnumMock } from 'app/models/enum/tipo-permissao.enum';
import { EventoService } from 'app/services/evento.service';
import { GeralUtil } from 'app/utils/geral.util';
import { ConfirmationService, MenuItem, MessageService } from 'primeng/api';
import { ActivatedRoute } from '@angular/router';
import { TipoOrigemEnumMock, TipoOrigemEnum } from 'app/models/enum/tipo-origem.enum';
import { Cupom } from 'app/models/desconto/cupom';
import { CupomService } from 'app/services/cupons.service';
import { Desconto } from 'app/models/desconto/desconto';
import { TipoDescontoEnum, TipoDescontoEnumMock } from 'app/models/enum/tipo-desconto.enum';

@Component({
  selector: 'app-cupom_detalhe',
  templateUrl: './cupom_detalhe.component.html',
  styleUrls: ['./cupom_detalhe.component.scss']
})
export class CupomDetalheComponent {
  items: MenuItem[] | undefined;
  home: MenuItem | undefined;

  listasVinculadasDialog: boolean = false;
  editando: boolean = false;
  novo: boolean = false;
  item!: Cupom;
  lista!: Cupom[];
  listaPermissoes!: TipoPermissaoEnum[];
  listaTipoDesconto!: TipoDescontoEnum[];
  selectedsPermissions!: TipoPermissaoEnum[] | null;

  submitted: boolean = false;

  private yourIdEmpresa: number = 1;
  private yourIdCupom: string = "";
  @Input() set idCupom(id: string) { this.yourIdCupom = id; }

  constructor(private service: CupomService, private messageService: MessageService, private confirmationService: ConfirmationService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getAllTiposDesconto();
    if (this.yourIdCupom != null) {
      this.getItem();
      this.novo = false;
    }
    else {
      this.novo = true;
      this.cleanItem();
      this.getAllCupomsEmpresa(this.yourIdEmpresa);
    }
  }

  getItem() {
    this.service.getCupomById(+this.yourIdCupom).subscribe(
      data => {
        this.item = data
        if (this.item.origem == TipoOrigemEnum.ja_existente) {
          this.editando = false;
        }
        else {
          this.editando = true;
        }
      },
      error => {
        // Handle the error in case of failure
        console.error('Error fetching states:', error);
      }
    )
  }

  getAllTiposDesconto() : void {
    this.listaTipoDesconto = TipoDescontoEnumMock.getMockArray();
  }

  getAllCupomsEmpresa(IdEmpresa: number) {
    this.service.getAllCupomsEmpresa(IdEmpresa).subscribe(
      data => {
        this.lista = data
      },
      error => {
        // Handle the error in case of failure
        console.error('Error fetching states:', error);
      }
    )
  }

  getTiposOrigem(): TipoOrigemEnum[] {
    return TipoOrigemEnumMock.getLista();
  }

  changeTipoOrigem(): void {
    if (this.item.origem == TipoOrigemEnum.ja_existente) {
      this.getAllCupomsEmpresa(this.yourIdEmpresa);
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
  changeCupomEmpresa() {
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
      return true;
    }
    else {
      return false;
    }
  }

  cleanItem(): void{
    this.item = {} as Cupom;
    this.item.desconto = {} as Desconto
  }

  openAlertaOrigem(): boolean {
    return this.openDetalhes() && this.item != null && this.item.origem == TipoOrigemEnum.ja_existente;
  }

  tipoPorcentagem(item: Cupom): boolean {
    if (item != null && item.desconto != null && item.desconto.tipo != null && item.desconto.tipo == 'Por Porcentagem') {
      return true;
    }
    else {
      return false;
    }
  }

  openDialogListasVinculadas() {
    this.listasVinculadasDialog = true;
  }

  hideDialog() {
    this.listasVinculadasDialog = false;
  }

  
}
