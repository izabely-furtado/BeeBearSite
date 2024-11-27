import { Component } from '@angular/core';
import { MenuService } from 'app/utils/menu.list';
import { MenuItem  } from 'primeng/api';


@Component({
  selector: 'app-menu-lateral-ranking',
  templateUrl: './menu-lateral-ranking.component.html',
  styleUrls: ['./menu-lateral-ranking.component.scss']
})
export class MenuLateralRankingComponent {
  items: MenuItem[] | undefined;

    position: string = 'left';

    public static positionOptions = MenuService.getPositionOptions

    ngOnInit() {
        this.items = MenuService.getItemsMenuRanking();
    }
}
