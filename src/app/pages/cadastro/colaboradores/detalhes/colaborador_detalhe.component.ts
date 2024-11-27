import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Colaborador } from 'app/models/colaborador/colaborador';
import { TipoPermissaoEnum, TipoPermissaoEnumMock } from 'app/models/enum/tipo-permissao.enum';
import { ColaboradorService } from 'app/services/colaborador.service';
import { ConfirmationService, MenuItem, MessageService } from 'primeng/api';

@Component({
  selector: 'app-colaborador_detalhe',
  templateUrl: './colaborador_detalhe.component.html',
  styleUrls: ['./colaborador_detalhe.component.scss']
})
export class ColaboradorDetalheComponent {
  name = 'Jane';
  teste = undefined;
  valid = false;

  item?: Colaborador;
  items: MenuItem[] | undefined;

  home: MenuItem | undefined;
  
  permissoes: TipoPermissaoEnum[] = TipoPermissaoEnumMock.getMockArray();
  private yourId: string = "";
  @Input() set id(id: string) { this.yourId = id; }

  constructor(private service: ColaboradorService, private messageService: MessageService, private confirmationService: ConfirmationService, private route: ActivatedRoute, private router: Router) {
      this.getItem(1);
     }

    ngOnInit() {
      this.route.params.subscribe(params => {
        this.yourId = params['id'];
      });

        
    }

    getItem(idColaborador: number) {
      this.service.getColaboradorById(+idColaborador).subscribe(
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
