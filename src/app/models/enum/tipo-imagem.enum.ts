export enum TipoImagemEnum {
    logo = 'Logo Principal',
    logo_fundo_escuro = 'Logo para Fundo Escuro',
    logo_fundo_claro = 'Logo para Fundo Claro',
    banner = 'Banner',
    instagram = 'Instagram',
    perfil = 'Perfil',
    produto = 'Produto'
}
  

var randomExt = require("random-ext");
export class TipoImagemEnumMock {
    public static getMock(): TipoImagemEnum {
        const randomIndex = Math.floor(Math.random() * this.getLista().length);
        return this.getLista()[randomIndex];
    }

    public static getMockArray(): TipoImagemEnum[] {
        return TipoImagemEnumMock.getLista();
    }

    public static getLista(): TipoImagemEnum[] {
        return [TipoImagemEnum.logo, 
            TipoImagemEnum.logo_fundo_escuro, 
            TipoImagemEnum.logo_fundo_claro, 
            TipoImagemEnum.banner, 
            TipoImagemEnum.instagram,
            TipoImagemEnum.perfil,
            TipoImagemEnum.produto
         ];
    }
                
}
