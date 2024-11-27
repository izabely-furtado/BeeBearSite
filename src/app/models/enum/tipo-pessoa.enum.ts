export enum TipoPessoaEnum {
    fisica = 'Física',
    juridica = 'Jurídica'
}
  

var randomExt = require("random-ext");
export class TipoPessoaEnumMock {
    public static getMock(): TipoPessoaEnum {
        const randomIndex = Math.floor(Math.random() * this.getLista().length);
        return this.getLista()[randomIndex];
    }

    public static getMockArray(): TipoPessoaEnum[] {
        return TipoPessoaEnumMock.getLista();
    }

    public static getLista(): TipoPessoaEnum[] {
        return [TipoPessoaEnum.fisica, 
            TipoPessoaEnum.juridica
         ];
    }
                
}
