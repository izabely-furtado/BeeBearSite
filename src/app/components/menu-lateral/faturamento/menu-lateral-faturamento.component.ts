import { Component } from '@angular/core';
import { MenuService } from 'app/utils/menu.list';
import { MenuItem  } from 'primeng/api';


@Component({
  selector: 'app-menu-lateral-faturamento',
  templateUrl: './menu-lateral-faturamento.component.html',
  styleUrls: ['./menu-lateral-faturamento.component.scss']
})
export class MenuLateralFaturamentoComponent {
  items: MenuItem[] | undefined;

    position: string = 'left';

    public static positionOptions = MenuService.getPositionOptions

    ngOnInit() {
        this.items = MenuService.getItemsMenuFaturamento();
    }
}
