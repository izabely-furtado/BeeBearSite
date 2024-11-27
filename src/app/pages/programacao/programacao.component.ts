import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Usuario } from 'app/models/usuario/usuario';
import { UsuarioService } from 'app/services/usuario.service';
import { ConfirmationService, MenuItem, MessageService } from 'primeng/api';

@Component({
  selector: 'app-programacao',
  templateUrl: './programacao.component.html',
  styleUrls: ['./programacao.component.scss']
})
export class ProgramacaoComponent {
  name = 'Jane';
  teste = undefined;
  valid = false;

  item?: Usuario;
  items: MenuItem[] | undefined;

    home: MenuItem | undefined;
    constructor(private service: UsuarioService, private messageService: MessageService, private confirmationService: ConfirmationService, private route: ActivatedRoute) {
      this.getItem(1);
     }

    ngOnInit() {
        this.items = [{ label: 'Perfil' }];

        this.home = { icon: 'pi pi-home', routerLink: '/' };
        
        
    }

    getItem(idUsuario: number) {
      this.service.getById(+idUsuario).subscribe(
        data => {
          this.item = data
        },
        error => {
          // Handle the error in case of failure
          console.error('Error fetching states:', error);
        }
      )
    }

    validate() {
      if (this.teste == null) {
        this.valid = true;
      }
      else {
        this.valid = false;
      }
    }
}
