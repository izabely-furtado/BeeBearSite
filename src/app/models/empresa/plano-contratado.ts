
import { MockRandom } from "app/utils/mock-random";
import { TipoPlanoContratadoEnum, TipoPlanoContratadoEnumMock } from "../enum/tipo-plano-contratado.enum";

export interface PlanoContratado {
    id: number
    
    tipo: TipoPlanoContratadoEnum //definir esse tipo depois na cliente PlanoContratadorial
    quant_usuarios_max: number
    gerenciamento_de_permissoes: boolean
    gerenciamento_de_permissoes_def: string
    gerencia_produtos: boolean
    gerencia_produtos_def: string
    gerencia_parceiros: boolean
    gerencia_parceiros_def: string
    usa_base_dados_bee_bear: boolean
    usa_base_dados_bee_bear_def: string
    mostra_ranking: boolean
    mostra_ranking_def: string
    mostra_informacoes_gerais_bee_bear: boolean
    mostra_informacoes_gerais_bee_bear_def: string
}

export class PlanoContratadoMock {
    static lista: PlanoContratado[];
    static gerenciamento_de_permissoes_def = "Permite o gerenciamento das permissões de acesso para cada usuário"
    static gerencia_produtos_def = "Permite o gerenciamento dos produtos vendidos pelo app, entradas e saídas, controle de estoque"
    static gerencia_parceiros_def = "Permite o gerenciamento dos parceiros de negócios empresariais e influencers"
    static usa_base_dados_bee_bear_def = "Permite usar nossa base de dados, o que facilita o cadastro no geral, pois possuímos todo um ctálogo de produtos padronizados, criação de eventos, ingressos, regras, tudo. Agilizando todo o processo"
    static mostra_ranking_def = "Mostra os melhores e piores dentro do seu negócio, considerando colaboradores, produtos, eventos, ets. Para você saber o que funcionar para o seu negócio"
    static mostra_informacoes_gerais_bee_bear_def = "Mostra todas as informações estatísticas gerais (sem especificar ou vazar dados confidenciais), considerando todos os nossos clientes, pra ter comparatidos do que está funcionando no mercado e saber de qual é a da concorrência"

    public static getMock(): PlanoContratado {
        let funcaoTipo = TipoPlanoContratadoEnumMock.getMock()
        if (funcaoTipo == TipoPlanoContratadoEnum.iniciante) {
            return this.getMockIniciante()
        }
        else if (funcaoTipo == TipoPlanoContratadoEnum.intermediário) {
            return this.getMockIntermediario()
        }
        else if (funcaoTipo == TipoPlanoContratadoEnum.avançado) {
            return this.getMockAvancado()
        }
        else return this.getMockIniciante()
    }

    public static getMockIniciante(): PlanoContratado {
        return {
            id: MockRandom.getInteger(1, 100),
            tipo: TipoPlanoContratadoEnum.iniciante,
            quant_usuarios_max: 3,
            gerenciamento_de_permissoes: false,
            gerencia_produtos: true,
            gerencia_parceiros: false,
            usa_base_dados_bee_bear: true,
            mostra_ranking: false,
            mostra_informacoes_gerais_bee_bear: false,
            gerenciamento_de_permissoes_def: PlanoContratadoMock.gerenciamento_de_permissoes_def,
            gerencia_produtos_def: PlanoContratadoMock.gerencia_produtos_def,
            gerencia_parceiros_def: PlanoContratadoMock.gerencia_parceiros_def,
            usa_base_dados_bee_bear_def: PlanoContratadoMock.usa_base_dados_bee_bear_def,
            mostra_ranking_def: PlanoContratadoMock.mostra_ranking_def,
            mostra_informacoes_gerais_bee_bear_def: PlanoContratadoMock.mostra_informacoes_gerais_bee_bear_def,
        };
    }

    public static getMockIntermediario(): PlanoContratado {
        return {
            id: MockRandom.getInteger(1, 100),
            tipo: TipoPlanoContratadoEnum.intermediário,
            quant_usuarios_max: 20,
            gerenciamento_de_permissoes: true,
            gerencia_produtos: true,
            gerencia_parceiros: true,
            usa_base_dados_bee_bear: true,
            mostra_ranking: false,
            mostra_informacoes_gerais_bee_bear: false,
            gerenciamento_de_permissoes_def: PlanoContratadoMock.gerenciamento_de_permissoes_def,
            gerencia_produtos_def: PlanoContratadoMock.gerencia_produtos_def,
            gerencia_parceiros_def: PlanoContratadoMock.gerencia_parceiros_def,
            usa_base_dados_bee_bear_def: PlanoContratadoMock.usa_base_dados_bee_bear_def,
            mostra_ranking_def: PlanoContratadoMock.mostra_ranking_def,
            mostra_informacoes_gerais_bee_bear_def: PlanoContratadoMock.mostra_informacoes_gerais_bee_bear_def,
        };
    }

    public static getMockAvancado(): PlanoContratado {
        return {
            id: MockRandom.getInteger(1, 100),
            tipo: TipoPlanoContratadoEnum.avançado,
            quant_usuarios_max: 999,
            gerenciamento_de_permissoes: true,
            gerencia_produtos: true,
            gerencia_parceiros: true,
            usa_base_dados_bee_bear: true,
            mostra_ranking: true,
            mostra_informacoes_gerais_bee_bear: true,
            gerenciamento_de_permissoes_def: PlanoContratadoMock.gerenciamento_de_permissoes_def,
            gerencia_produtos_def: PlanoContratadoMock.gerencia_produtos_def,
            gerencia_parceiros_def: PlanoContratadoMock.gerencia_parceiros_def,
            usa_base_dados_bee_bear_def: PlanoContratadoMock.usa_base_dados_bee_bear_def,
            mostra_ranking_def: PlanoContratadoMock.mostra_ranking_def,
            mostra_informacoes_gerais_bee_bear_def: PlanoContratadoMock.mostra_informacoes_gerais_bee_bear_def,
        };
    }

    public static getMockArray(quantidade : number) : PlanoContratado[]{
        this.lista = [];
        for (let i = 0; i < quantidade; i++) {
            this.lista.push(PlanoContratadoMock.getMock());
          }
        return this.lista;
    }

    public static getMockArrayTrio() : PlanoContratado[]{
        this.lista = [];
        this.lista.push(PlanoContratadoMock.getMockIniciante());
        this.lista.push(PlanoContratadoMock.getMockIntermediario());
        this.lista.push(PlanoContratadoMock.getMockAvancado());
        
        return this.lista;
    }

    
}
