export enum TipoOrigemPerfilEnum {
    ja_existente = 'PERFIL JÁ EXISTENTE',
    novo = 'CRIANDO APENAS PARA O EVENTO'
}
  

export class TipoOrigemPerfilEnumMock {
    public static getMock(): TipoOrigemPerfilEnum {
        const randomIndex = Math.floor(Math.random() * this.getLista().length);
        return this.getLista()[randomIndex];
    }

    public static getMockArray(): TipoOrigemPerfilEnum[] {
        return TipoOrigemPerfilEnumMock.getLista();
    }

    public static getLista(): TipoOrigemPerfilEnum[] {
        return [TipoOrigemPerfilEnum.ja_existente, 
            TipoOrigemPerfilEnum.novo
         ];
    }
                
}
