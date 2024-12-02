import { Component } from '@angular/core';
import { MenuService } from 'app/utils/menu.list';
import { MenuItem  } from 'primeng/api';


@Component({
  selector: 'app-menu-parceiros',
  templateUrl: './menu-parceiros.component.html',
  styleUrls: ['./menu-parceiros.component.scss']
})
export class MenuParceirosComponent {
  items: MenuItem[] | undefined;

    position: string = 'top';

    public static positionOptions = MenuService.getPositionOptions

    ngOnInit() {
        this.items = MenuService.getItemsOptionsParceiros();
    }
}
