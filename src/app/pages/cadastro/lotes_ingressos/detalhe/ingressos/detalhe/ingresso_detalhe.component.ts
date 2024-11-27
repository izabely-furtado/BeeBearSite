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
import { IngressoService } from 'app/services/ingresso.service';
import { Ingresso } from 'app/models/produto/ingresso/ingresso';
import { TipoIngressoEnum, TipoIngressoEnumMock } from 'app/models/enum/tipo-ingresso.enum';

@Component({
  selector: 'app-ingresso_detalhe',
  templateUrl: './ingresso_detalhe.component.html',
  styleUrls: ['./ingresso_detalhe.component.scss']
})
export class IngressoDetalheComponent {
  items: MenuItem[] | undefined;
  home: MenuItem | undefined;

  listasVinculadasDialog: boolean = false;
  editando: boolean = false;
  novo: boolean = false;
  item!: Ingresso;
  lista!: Ingresso[];
  listaTipo!: TipoIngressoEnum[];
  selectedsTipos!: TipoIngressoEnum[] | null;
  valor_padrao_lote: number = 20;

  submitted: boolean = false;

  private yourIdEmpresa: number = 1;
  private yourIdIngresso: string = "";
  private yourIdLote: string = ""
  @Input() set idIngresso(id: string) { this.yourIdIngresso = id; }
  @Input() set idLote(id: string) { this.yourIdLote = id; }
  

  constructor(private service: IngressoService, private messageService: MessageService, private confirmationService: ConfirmationService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getAllTipos();
    if (this.yourIdIngresso != null) {
      this.getItem();
      this.novo = false;
    }
    else {
      this.novo = true;
      this.cleanItem();
      this.getAllIngressosEmpresa(this.yourIdEmpresa);
    }
  }

  getItem() {
    this.service.getIngressoById(+this.yourIdIngresso).subscribe(
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

  getAllTipos() : void {
    this.listaTipo = TipoIngressoEnumMock.getMockArray();
  }

  getAllIngressosEmpresa(IdEmpresa: number) {
    this.service.getAllIngressosLote(IdEmpresa).subscribe(
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
    this.item = {} as Ingresso;
  }

  openDialogListasVinculadas() {
    this.listasVinculadasDialog = true;
  }

  hideDialog() {
    this.listasVinculadasDialog = false;
  }

  
}
