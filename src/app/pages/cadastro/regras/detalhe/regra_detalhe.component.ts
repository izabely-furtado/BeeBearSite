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
  selector: 'app-regra_detalhe',
  templateUrl: './regra_detalhe.component.html',
  styleUrls: ['./regra_detalhe.component.scss']
})
export class RegraDetalheComponent {
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

  permissoes: TipoPermissaoEnum[] = TipoPermissaoEnumMock.getMockArray();

  private yourIdEmpresa: number = 1;
  private yourIdEvento: string = "";
  @Input() set idEvento(id: string) { this.yourIdEvento = id; }

  constructor(private service: RegraService, private messageService: MessageService, private confirmationService: ConfirmationService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getItem(1)
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

  cleanItem(): void{
    this.item = {} as Regra;
  }


}
