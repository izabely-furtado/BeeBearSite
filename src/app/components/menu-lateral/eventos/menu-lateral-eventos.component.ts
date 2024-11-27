import { Component } from '@angular/core';
import { MenuService } from 'app/utils/menu.list';
import { MenuItem  } from 'primeng/api';


@Component({
  selector: 'app-menu-lateral-eventos',
  templateUrl: './menu-lateral-eventos.component.html',
  styleUrls: ['./menu-lateral-eventos.component.scss']
})
export class MenuLateralEventosComponent {
  items: MenuItem[] | undefined;

    position: string = 'left';

    public static positionOptions = MenuService.getPositionOptions

    ngOnInit() {
        this.items = MenuService.getItemsMenuEventos();
    }
}
