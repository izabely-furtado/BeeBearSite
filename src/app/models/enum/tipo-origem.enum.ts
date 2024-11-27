export enum TipoOrigemEnum {
    ja_existente = 'JÁ EXISTENTE NA EMPRESA',
    novo = 'CRIANDO APENAS PARA O EVENTO'
}
  

export class TipoOrigemEnumMock {
    public static getMock(): TipoOrigemEnum {
        const randomIndex = Math.floor(Math.random() * this.getLista().length);
        return this.getLista()[randomIndex];
    }

    public static getMockArray(): TipoOrigemEnum[] {
        return TipoOrigemEnumMock.getLista();
    }

    public static getLista(): TipoOrigemEnum[] {
        return [TipoOrigemEnum.ja_existente, 
            TipoOrigemEnum.novo
         ];
    }
                
}
