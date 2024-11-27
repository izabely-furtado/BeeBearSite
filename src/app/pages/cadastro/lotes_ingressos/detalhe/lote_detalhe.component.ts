import { Component, Input } from '@angular/core';
import { Evento } from 'app/models/evento/evento';
import { TipoPermissaoEnum, TipoPermissaoEnumMock } from 'app/models/enum/tipo-permissao.enum';
import { EventoService } from 'app/services/evento.service';
import { GeralUtil } from 'app/utils/geral.util';
import { ConfirmationService, MenuItem, MessageService } from 'primeng/api';
import { ActivatedRoute } from '@angular/router';
import { TipoOrigemEnumMock, TipoOrigemEnum } from 'app/models/enum/tipo-origem.enum';
import { Desconto } from 'app/models/desconto/desconto';
import { TipoDescontoEnum, TipoDescontoEnumMock } from 'app/models/enum/tipo-desconto.enum';
import { Lote } from 'app/models/produto/ingresso/lote';
import { LoteService } from 'app/services/lote.service';
import { Ingresso } from 'app/models/produto/ingresso/ingresso';

@Component({
  selector: 'app-lote_detalhe',
  templateUrl: './lote_detalhe.component.html',
  styleUrls: ['./lote_detalhe.component.scss']
})
export class LoteDetalheComponent {
  items: MenuItem[] | undefined;
  home: MenuItem | undefined;

  listasVinculadasDialog: boolean = false;
  editando: boolean = false;
  novo: boolean = false;
  item!: Lote;
  lista!: Lote[];
  listaPermissoes!: TipoPermissaoEnum[];
  listaTipoDesconto!: TipoDescontoEnum[];
  selectedsPermissions!: TipoPermissaoEnum[] | null;

  submitted: boolean = false;

  private yourIdEmpresa: number = 1;
  private yourIdLote: string = "";
  @Input() set idLote(id: string) { this.yourIdLote = id; }

  constructor(private service: LoteService, private messageService: MessageService, private confirmationService: ConfirmationService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getAllTiposDesconto();
    if (this.yourIdLote != null) {
      this.getItem();
      this.novo = false;
    }
    else {
      this.novo = true;
      this.cleanItem();
      this.getAllLotesEmpresa(this.yourIdEmpresa);
    }
  }

  getItem() {
    this.service.getLoteById(+this.yourIdLote).subscribe(
      data => {
        this.item = data
        this.editando = true;
        
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

  getAllLotesEmpresa(IdEmpresa: number) {
    this.service.getAllLotesEmpresa(IdEmpresa).subscribe(
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

  cleanItem(): void{
    this.item = {} as Lote;
    this.item.ingressos = []
  }

  openDialogListasVinculadas() {
    this.listasVinculadasDialog = true;
  }

  hideDialog() {
    this.listasVinculadasDialog = false;
  }

  
}
