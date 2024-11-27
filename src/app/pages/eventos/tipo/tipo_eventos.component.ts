import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TipoEventoMenuEnum } from 'app/models/enum/tipo-evento-menu.enum';
import { TipoEventoEnum } from 'app/models/enum/tipo-evento.enum';
import { Evento } from 'app/models/evento/evento';
import { ColaboradorService } from 'app/services/colaborador.service';
import { EventoService } from 'app/services/evento.service';
import { MockRandom } from 'app/utils/mock-random';
import { ConfirmationService, MenuItem, MessageService } from 'primeng/api';

@Component({
  selector: 'app-tipo_eventos',
  templateUrl: './tipo_eventos.component.html',
  styleUrls: ['./tipo_eventos.component.scss']
})
export class TipoEventosComponent {
  items: MenuItem[] | undefined;
  home: MenuItem | undefined;

  dialog: boolean = false;
  lista!: Evento[];

  item!: Evento;
  
  submitted: boolean = false;

  editando: boolean = false;
  private yourIdTipo: string = "";
  @Input() set idTipo(id: string) { this.yourIdTipo = id; }

  constructor(private service: EventoService, private messageService: MessageService, private confirmationService: ConfirmationService, private route: ActivatedRoute, private router: Router) { 
    
   }

  ngOnInit() {

    this.route.params.subscribe(params => {
      this.yourIdTipo = params['id'];
    });

    this.items = [{ label: 'Eventos', url: './eventos', target: '_self'}, { label: this.yourIdTipo }];

    this.home = { icon: 'pi pi-home', routerLink: '/' };

    this.getAll();

    
  }

  openNew() {
    this.submitted = false; 
    this.dialog = true;
  }

  getAll() {
    this.service.getAllEventos().subscribe(
      data => {
        this.lista = data
      },
      error => {
        // Handle the error in case of failure
        console.error('Error fetching states:', error);
      }
    )
  }

 
  getImagem(imagem : string): string {
    return "./assets/images/mock/" + imagem
  }

  getHeader(): string {
    return this.yourIdTipo;
  }

  getSaibaMais(item: Evento) {
    this.item = item
    this.dialog = true
  } 

  acessar(itemId : number) {
    this.router.navigate([`cadastro/eventos/detalhe/${itemId}`]);
  }

  getFaixaEtariaColorByFaixa(faixa: string) {
    return MockRandom.getFaixaEtariaColorByFaixa(faixa)
  }

}
