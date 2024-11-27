import { Component } from '@angular/core';
import { MenuService } from 'app/utils/menu.list';
import { MenuItem  } from 'primeng/api';


@Component({
  selector: 'app-menu-lateral-cadastro',
  templateUrl: './menu-lateral-cadastro.component.html',
  styleUrls: ['./menu-lateral-cadastro.component.scss']
})
export class MenuLateralCadastroComponent {
  items: MenuItem[] | undefined;

    position: string = 'left';

    public static positionOptions = MenuService.getPositionOptions

    ngOnInit() {
        this.items = MenuService.getItemsMenuCadastro();
    }
}
