import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Permissao } from 'app/models/permissao';
import { GeralUtil } from 'app/utils/geral.util';
import { MenuService } from 'app/utils/menu.list';
import { PermissoesService } from 'app/utils/permissoes.list';
import { ConfirmationService, MenuItem, MessageService } from 'primeng/api';

@Component({
  selector: 'app-faturamento',
  templateUrl: './faturamento.component.html',
  styleUrls: ['./faturamento.component.scss']
})
export class FaturamentoComponent {
  name = 'Jane';
  teste = undefined;
  valid = false;

  items: MenuItem[] | undefined;
  items2: MenuItem[] | undefined;
  position: string = 'top';
  positionOptions: any

  home: MenuItem | undefined;

  statuses!: any[];
  responsiveOptions;

  dialog: boolean = false;
  lista!: Permissao[];
  item: Permissao  = {id : 0};
  selecteds!: Permissao[] | null;

  submitted: boolean = false;

  private yourIdEvento: string = "";
  @Input() set idEvento(id: string) { this.yourIdEvento = id; }

  constructor(private messageService: MessageService, private confirmationService: ConfirmationService, private route: ActivatedRoute, private router: Router) { 
    this.responsiveOptions = MenuService.getResponsiveOptions();
  }

  ngOnInit() {
    this.items = [{ label: 'Faturamento' }];

    this.home = { icon: 'pi pi-home', routerLink: '/' };

    this.items2 = MenuService.getItemsMenuFaturamento();
    this.positionOptions = MenuService.getPositionOptions();

    this.route.params.subscribe(params => {
      this.yourIdEvento = params['id'];
    });

    this.responsiveOptions = [
      {
          breakpoint: '1199px',
          numVisible: 1,
          numScroll: 1
      },
      {
          breakpoint: '991px',
          numVisible: 2,
          numScroll: 1
      },
      {
          breakpoint: '767px',
          numVisible: 1,
          numScroll: 1
      }
  ];
  }

  openNew() {
    this.submitted = false; 
    this.item = {} as Permissao;
    this.dialog = true;
  }


  abrirLink(url: string) {
    this.router.navigate([`faturamento/${url}`]);
  }

}
