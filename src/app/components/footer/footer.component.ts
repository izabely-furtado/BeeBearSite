import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Evento } from 'app/models/evento/evento';
import { EventoService } from 'app/services/evento.service';
import { MenuService } from 'app/utils/menu.list';
import { MessageService, ConfirmationService } from 'primeng/api';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  lista_em_destaque!: Evento[]

  constructor(private service: EventoService, private messageService: MessageService, private confirmationService: ConfirmationService, private route: ActivatedRoute, private router: Router) { 
    
  }

  ngOnInit() {
    this.getAllEventosTOP4();
    debugger
    
  }

  getAllEventosTOP4() {
    this.service.getAllEventosTOP4().subscribe(
      data => {
        this.lista_em_destaque = data
      },
      error => {
        // Handle the error in case of failure
        console.error('Error fetching states:', error);
      }
    )
  }
  
}
