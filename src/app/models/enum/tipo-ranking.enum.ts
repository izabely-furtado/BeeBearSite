import { MockRandom } from "app/utils/mock-random";

export enum TipoRankingEnum {
    top_do_top = 'TOP do TOP',
    melhores_colaboradores = 'Melhores Colaboradores',
    melhores_eventos = 'Melhores Eventos',
    melhores_produtos = 'Melhores Produtos',
    pode_melhorar = 'Pode Melhorar',
    no_tempo = 'No Tempo'
}
  

var randomExt = require("random-ext");
export class TipoRankingEnumMock {
    public static getMock(): TipoRankingEnum {
        const randomIndex = Math.floor(Math.random() * this.getLista().length);
        return this.getLista()[randomIndex];
    }

    public static getMockArray(): TipoRankingEnum[] {
        return TipoRankingEnumMock.getLista();
    }

    public static getLista(): TipoRankingEnum[] {
        return [TipoRankingEnum.top_do_top, 
            TipoRankingEnum.melhores_colaboradores, 
            TipoRankingEnum.melhores_eventos, 
            TipoRankingEnum.melhores_produtos,
            TipoRankingEnum.pode_melhorar,
            TipoRankingEnum.no_tempo
         ];
    }

    public static getListaParcial(): TipoRankingEnum[] {
        let listaInteira = this.getLista();
        let listaParcial: TipoRankingEnum[] = []; 
        let indexesManter = MockRandom.getIndexListaParcial(listaInteira.length);
        for (let i = 0; i < indexesManter.length; i++) {
            listaParcial.push(listaInteira[indexesManter[i]]);
        }
        return listaParcial;
    }
                
}
