
import { MockRandom } from "app/utils/mock-random";
import { Imagem, ImagemMock } from "../imagem";
import { Paleta, PaletaMock } from "./paleta";

export interface IdentidadeVisual {
    id: number
    imagem_principal: string;
    logo_fundo_claro: string,
    logo_fundo_escuro: Imagem,
    paleta: Paleta,
    imagens: Imagem[]

    valido?: boolean
}

export class IdentidadeVisualMock {
    static lista: IdentidadeVisual[];

    public static getMock(): IdentidadeVisual {
        let quantidade_var = MockRandom.getInteger(1,7)
        return {
            id: MockRandom.getInteger(1, 100),
            logo_fundo_claro: MockRandom.getInteger(1, 65) + '.png',
            logo_fundo_escuro: ImagemMock.getMock(),
            paleta: PaletaMock.getMock(),
            imagens: ImagemMock.getMockArray(10),
            valido: MockRandom.getBoolean(),
            imagem_principal: quantidade_var + '.jpg',
        };
    }

    public static getMockArray(quantidade : number) : IdentidadeVisual[]{
        this.lista = [];
        for (let i = 0; i < quantidade; i++) {
            this.lista.push(IdentidadeVisualMock.getMock());
          }
        return this.lista;
    }
}
