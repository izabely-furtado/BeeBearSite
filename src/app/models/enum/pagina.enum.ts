import { MockRandom } from "app/utils/mock-random";

export enum PaginaEnum {
    empresa = 'Empresa',
    visao_empresarial = 'Visão Empresarial',
    eventos = 'Eventos',
    permissoes = 'Permissões',
    ranking = 'Ranking',
    faturamento = 'Faturamento',
    cadastro = 'Cadastro',
    cadastro_colaboradores = 'Cadastro' + ' > Colaboradores',
    cadastro_parceiros = 'Cadastro' + ' > Parceiros',
    cadastro_endereco = 'Cadastro' + ' > Endereços',
    cadastro_produtos = 'Cadastro' + ' > Produtos',
    cadastro_eventos = 'Cadastro' + ' > Eventos',
    cadastro_eventos_endereco = 'Cadastro' + ' > Eventos' + ' > Endereço',
    cadastro_eventos_contato = 'Cadastro' + ' > Eventos' + ' > Contato',
    cadastro_eventos_lotes_ingressos = 'Cadastro' + ' > Eventos' + ' > Lotes/Ingressos',
    cadastro_eventos_produtos = 'Cadastro' + ' > Eventos' + ' > Produtos',
    cadastro_eventos_colaboradores = 'Cadastro' + ' > Eventos' + ' > Colaboradores',
    cadastro_eventos_parceiros = 'Cadastro' + ' > Eventos' + ' > Parceiros',
    cadastro_eventos_imagens = 'Cadastro' + ' > Eventos' + ' > Imagens',
    cadastro_eventos_regras = 'Cadastro' + ' > Eventos' + ' > Regras',
    cadastro_eventos_cupons = 'Cadastro' + ' > Eventos' + ' > Cupons',
    cadastro_eventos_lista_desconto = 'Cadastro' + ' > Eventos' + ' > Lista de Desconto',
    cadastro_eventos_area_musical = 'Cadastro' + ' > Eventos' + ' > Área Musical'
}
  

var randomExt = require("random-ext");
export class PaginaEnumMock {
    public static getMock(): PaginaEnum {
        const randomIndex = Math.floor(Math.random() * this.getLista().length);
        return this.getLista()[randomIndex];
    }

    public static getMockArray(): PaginaEnum[] {
        return PaginaEnumMock.getLista();
    }

    public static getLista(): PaginaEnum[] {
        return [PaginaEnum.empresa, 
            PaginaEnum.visao_empresarial,
            PaginaEnum.eventos,
            PaginaEnum.permissoes,
            PaginaEnum.ranking,
            PaginaEnum.faturamento,
            PaginaEnum.cadastro,
            PaginaEnum.cadastro_colaboradores,
            PaginaEnum.cadastro_parceiros,
            PaginaEnum.cadastro_endereco,
            PaginaEnum.cadastro_produtos,
            PaginaEnum.cadastro_eventos,
            PaginaEnum.cadastro_eventos_endereco,
            PaginaEnum.cadastro_eventos_contato,
            PaginaEnum.cadastro_eventos_lotes_ingressos,
            PaginaEnum.cadastro_eventos_colaboradores,
            PaginaEnum.cadastro_eventos_parceiros,
            PaginaEnum.cadastro_eventos_imagens,
            PaginaEnum.cadastro_eventos_regras,
            PaginaEnum.cadastro_eventos_cupons,
            PaginaEnum.cadastro_eventos_lista_desconto,
            PaginaEnum.cadastro_eventos_area_musical,
            PaginaEnum.cadastro_eventos_produtos
         ];
    }

    public static getListaParcial(): PaginaEnum[] {
        let listaInteira = this.getLista();
        let listaParcial: PaginaEnum[] = []; 
        let indexesManter = MockRandom.getIndexListaParcial(listaInteira.length);
        for (let i = 0; i < indexesManter.length; i++) {
            listaParcial.push(listaInteira[indexesManter[i]]);
        }
        return listaParcial;
    }
                
}
