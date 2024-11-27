export enum TipoItemRankingEnum {
    colaborador = 'Colaborador',
    evento = 'Evento',
    produto = 'Produto',
    inflencer = 'Influencer',
    ingresso = 'Ingresso',
    musico = 'Musico',
    playlist = 'Playlist'
}
  

var randomExt = require("random-ext");
export class TipoItemRankingEnumMock {
    public static getMock(): TipoItemRankingEnum {
        const randomIndex = Math.floor(Math.random() * this.getLista().length);
        return this.getLista()[randomIndex];//TipoProdutoEnumMock.lista[2];
    }

    public static getMockArray(): TipoItemRankingEnum[] {
        return this.getLista();
    }

    public static getLista(): TipoItemRankingEnum[] {
        return [TipoItemRankingEnum.colaborador, 
            TipoItemRankingEnum.evento,
            TipoItemRankingEnum.produto,
            TipoItemRankingEnum.inflencer,
            TipoItemRankingEnum.ingresso,
            TipoItemRankingEnum.musico,
            TipoItemRankingEnum.playlist
         ];
    }
                
}
