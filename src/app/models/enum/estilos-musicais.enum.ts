export enum EstilosMusicaisEnum {
    show = 'Show',
    balada = 'Balada',
    aniversario15 = 'Aniversário de 15 anos',
    aniversario = 'Aniversário',
    palestra = 'Palestra',
    aula = 'Aula',
    teatro = 'Teatro',
    cinema = 'Cinema',
    standup = 'Standup',
    projeto = 'Projeto',
    fornecedor = 'Fornecedor' ///fazer isso direito depois
}
  

export class EstilosMusicaisEnumMock {
    public static getMock(): EstilosMusicaisEnum {
        const randomIndex = Math.floor(Math.random() * this.getLista().length);
        return this.getLista()[randomIndex];
    }

    public static getMockArray(): EstilosMusicaisEnum[] {
        return EstilosMusicaisEnumMock.getLista();
    }

    public static getLista(): EstilosMusicaisEnum[] {
        return [EstilosMusicaisEnum.show, 
            EstilosMusicaisEnum.balada, 
            EstilosMusicaisEnum.aniversario15, 
            EstilosMusicaisEnum.aniversario, 
            EstilosMusicaisEnum.palestra,
            EstilosMusicaisEnum.aula,
            EstilosMusicaisEnum.teatro,
            EstilosMusicaisEnum.cinema,
            EstilosMusicaisEnum.standup,
            EstilosMusicaisEnum.projeto,
            EstilosMusicaisEnum.fornecedor
         ];
    }
                
}
