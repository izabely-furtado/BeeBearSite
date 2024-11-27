import { MockRandom } from "app/utils/mock-random";

export enum TipoPermissaoEnum {
    administrativo = 'Administrativo',
    cadastro = 'Cadastro',
    cancelamento = 'Cancelamento',
    rh = 'Recursos Humanos',
    ingressos = 'Ingressos',
    produto = 'Controle de Estoque',
    eventos = 'Eventos',
    musical = 'Musical',
    influencer = 'Influencer',
    apenas_visualizar = 'Apenas visualização',
    investidor = 'Investidor'
}
  

var randomExt = require("random-ext");
export class TipoPermissaoEnumMock {
    public static getMock(): TipoPermissaoEnum {
        const randomIndex = Math.floor(Math.random() * this.getLista().length);
        return this.getLista()[randomIndex];
    }

    public static getMockArray(): TipoPermissaoEnum[] {
        return TipoPermissaoEnumMock.getLista();
    }

    public static getLista(): TipoPermissaoEnum[] {
        return [TipoPermissaoEnum.administrativo, 
            TipoPermissaoEnum.cadastro, 
            TipoPermissaoEnum.cancelamento, 
            TipoPermissaoEnum.rh,
            TipoPermissaoEnum.ingressos,
            TipoPermissaoEnum.eventos,
            TipoPermissaoEnum.musical,
            TipoPermissaoEnum.influencer,
            TipoPermissaoEnum.investidor
         ];
    }

    public static getListaParcial(): TipoPermissaoEnum[] {
        let listaInteira = this.getLista();
        let listaParcial: TipoPermissaoEnum[] = []; 
        let indexesManter = MockRandom.getIndexListaParcial(listaInteira.length);
        for (let i = 0; i < indexesManter.length; i++) {
            listaParcial.push(listaInteira[indexesManter[i]]);
        }
        return listaParcial;
    }
                
}
