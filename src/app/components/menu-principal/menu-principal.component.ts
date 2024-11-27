import { Component } from '@angular/core';
import { MenuService } from 'app/utils/menu.list';
import { MenuItem  } from 'primeng/api';


@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.component.html',
  styleUrls: ['./menu-principal.component.scss']
})
export class MenuPrincipalComponent {
  items: MenuItem[] | undefined;

    position: string = 'top';

    public static positionOptions = MenuService.getPositionOptions

    ngOnInit() {
        this.items = MenuService.getItemsMenu();
    }
}
