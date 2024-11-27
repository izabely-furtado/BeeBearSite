export enum SemanalMensalAnualEnum {
    semanal = 'SEMANAL',
    mensal = 'MENSAL',
    anual = 'ANUAL'
}
  

var randomExt = require("random-ext");
export class SemanalMensalAnualEnumMock {
    public static getMock(): SemanalMensalAnualEnum {
        const randomIndex = Math.floor(Math.random() * this.getLista().length);
        return this.getLista()[randomIndex];
    }

    public static getMockArray(): SemanalMensalAnualEnum[] {
        return SemanalMensalAnualEnumMock.getLista();
    }

    public static getLista(): SemanalMensalAnualEnum[] {
        return [SemanalMensalAnualEnum.semanal, 
            SemanalMensalAnualEnum.mensal, 
            SemanalMensalAnualEnum.anual, 
         ];
    }
                
}
