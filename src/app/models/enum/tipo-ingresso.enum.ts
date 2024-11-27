export enum TipoIngressoEnum {
    normal = 'Normal',
    meia = 'Meia',
    solidaria = 'Solidária',
    vip = 'VIP',
    gratuito = 'Gratuito'
}
  

var randomExt = require("random-ext");
export class TipoIngressoEnumMock {
    public static getMock(): TipoIngressoEnum {
        const randomIndex = Math.floor(Math.random() * this.getLista().length);
        return this.getLista()[randomIndex];
    }

    public static getMockArray(): TipoIngressoEnum[] {
        return TipoIngressoEnumMock.getLista();
    }

    public static getLista(): TipoIngressoEnum[] {
        return [TipoIngressoEnum.normal, 
            TipoIngressoEnum.meia,
            TipoIngressoEnum.solidaria,
            TipoIngressoEnum.vip,
            TipoIngressoEnum.gratuito
         ];
    }
                
}
