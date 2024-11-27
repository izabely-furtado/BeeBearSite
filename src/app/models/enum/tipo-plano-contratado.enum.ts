export enum TipoPlanoContratadoEnum {
    iniciante = 'STARTER',
    intermediário = 'PRO',
    avançado = 'PREMIUM'
}
  

var randomExt = require("random-ext");
export class TipoPlanoContratadoEnumMock {
    public static getMock(): TipoPlanoContratadoEnum {
        const randomIndex = Math.floor(Math.random() * this.getLista().length);
        return this.getLista()[randomIndex];
    }

    public static getMockArray(): TipoPlanoContratadoEnum[] {
        return TipoPlanoContratadoEnumMock.getLista();
    }

    public static getLista(): TipoPlanoContratadoEnum[] {
        return [TipoPlanoContratadoEnum.iniciante, 
            TipoPlanoContratadoEnum.intermediário, 
            TipoPlanoContratadoEnum.avançado
         ];
    }
                
}
