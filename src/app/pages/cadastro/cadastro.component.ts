import { Component } from '@angular/core';
import { MenuService } from 'app/utils/menu.list';
import { ConfirmationService, MenuItem, MessageService } from 'primeng/api';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent {
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

  constructor(private messageService: MessageService, private confirmationService: ConfirmationService) { 
    this.responsiveOptions = MenuService.getResponsiveOptions();
  }

  ngOnInit() {
    this.items = [{ label: 'Cadastro' }];

    this.home = { icon: 'pi pi-home', routerLink: '/' };

    this.items2 = MenuService.getItemsMenuCadastro();
    this.positionOptions = MenuService.getPositionOptions();

    
    
  }

  abrirLink(url: string) {
    window.open(url, '_self');
  }
  
}
