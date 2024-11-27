import { PaginaEnum, PaginaEnumMock } from "app/models/enum/pagina.enum";
import { TipoPermissaoEnum } from "app/models/enum/tipo-permissao.enum";
import { Permissao } from "app/models/permissao";

export class PermissoesService {

    private static permissao1 = {
        id: 1,
        descricao: '',
        tipo: TipoPermissaoEnum.administrativo,
        imagem: '1.jpg',
        paginas: PaginaEnumMock.getLista()        
    } as Permissao

    private static permissao2 = {
        id: 2,
        descricao: '',
        tipo: TipoPermissaoEnum.apenas_visualizar,
        imagem: '2.jpg',
        paginas: [PaginaEnum.empresa, 
            PaginaEnum.visao_empresarial,
            PaginaEnum.eventos,
            PaginaEnum.ranking
         ]
    } as Permissao

    private static permissao3 = {
        id: 3,
        descricao: '',
        tipo: TipoPermissaoEnum.cadastro,
        imagem: '3.jpg',
        paginas: [PaginaEnum.cadastro,
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
            PaginaEnum.cadastro_eventos_area_musical
         ]
    } as Permissao

    private static permissao4 = {
        id: 4,
        descricao: '',
        tipo: TipoPermissaoEnum.eventos,
        imagem: '4.jpg',
        paginas: [PaginaEnum.eventos,
            PaginaEnum.cadastro,
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
            PaginaEnum.cadastro_eventos_area_musical
         ]
    } as Permissao

    private static permissao5 = {
        id: 5,
        descricao: '',
        tipo: TipoPermissaoEnum.influencer,
        imagem: '5.jpg',
        paginas: [PaginaEnum.empresa, 
            PaginaEnum.eventos,
            PaginaEnum.ranking,
            PaginaEnum.cadastro,
            PaginaEnum.cadastro_eventos,
            PaginaEnum.cadastro_eventos_contato,
            PaginaEnum.cadastro_eventos_parceiros,
            PaginaEnum.cadastro_eventos_imagens,
            PaginaEnum.cadastro_eventos_regras,
            PaginaEnum.cadastro_eventos_cupons,
            PaginaEnum.cadastro_eventos_lista_desconto
         ]
    } as Permissao

    private static permissao6 = {
        id: 6,
        descricao: '',
        tipo: TipoPermissaoEnum.ingressos,
        imagem: '6.jpg',
        paginas: [PaginaEnum.empresa, 
            PaginaEnum.visao_empresarial,
            PaginaEnum.eventos,
            PaginaEnum.faturamento,
            PaginaEnum.cadastro,
            PaginaEnum.cadastro_eventos,
            PaginaEnum.cadastro_eventos_lotes_ingressos,
            PaginaEnum.cadastro_eventos_cupons,
            PaginaEnum.cadastro_eventos_lista_desconto
         ]
    } as Permissao

    private static permissao7 = {
        id: 7,
        descricao: '',
        tipo: TipoPermissaoEnum.musical,
        imagem: '7.jpg',
        paginas: [PaginaEnum.empresa, 
            PaginaEnum.eventos,
            PaginaEnum.cadastro,
            PaginaEnum.cadastro_eventos,
            PaginaEnum.cadastro_eventos_area_musical
         ]
    } as Permissao

    private static permissao8 = {
        id: 8,
        descricao: '',
        tipo: TipoPermissaoEnum.produto,
        imagem: '8.jpg',
        paginas: [PaginaEnum.eventos,
            PaginaEnum.cadastro,
            PaginaEnum.cadastro_produtos,
            PaginaEnum.cadastro_eventos,
            PaginaEnum.cadastro_eventos_produtos
         ]
    } as Permissao

    private static permissao9 = {
        id: 9,
        descricao: '',
        tipo: TipoPermissaoEnum.rh,
        imagem: '9.jpg',
        paginas: [PaginaEnum.empresa, 
            PaginaEnum.visao_empresarial,
            PaginaEnum.eventos,
            PaginaEnum.permissoes,
            PaginaEnum.ranking,
            PaginaEnum.cadastro,
            PaginaEnum.cadastro_colaboradores,
            PaginaEnum.cadastro_parceiros,
            PaginaEnum.cadastro_endereco,
            PaginaEnum.cadastro_eventos,
            PaginaEnum.cadastro_eventos_colaboradores,
            PaginaEnum.cadastro_eventos_parceiros,
            PaginaEnum.cadastro_eventos_regras
         ]
    } as Permissao

    private static permissao10 = {
        id: 10,
        descricao: '',
        tipo: TipoPermissaoEnum.investidor,
        imagem: '10.jpg',
        paginas: [PaginaEnum.empresa, 
            PaginaEnum.visao_empresarial,
            PaginaEnum.eventos,
            PaginaEnum.ranking,
            PaginaEnum.faturamento
         ]
    } as Permissao


    public static getPermissoes(): Permissao[] {
        let permissoes : Permissao[] = [
            PermissoesService.permissao1,
            PermissoesService.permissao2,
            PermissoesService.permissao3,
            PermissoesService.permissao4,
            PermissoesService.permissao5,
            PermissoesService.permissao6,
            PermissoesService.permissao7,
            PermissoesService.permissao8,
            PermissoesService.permissao9,
            PermissoesService.permissao10
        ];
        return permissoes
    }


}