import { Cidade, CidadeClass } from 'app/models/endereco/cidade';
import { Erro } from 'app/models/erro/erro';
import { ErroCEP } from 'app/models/erro/erro-cep';
import { Estado, EstadoClass } from 'app/models/endereco/estado';
import { EstadoService } from 'app/utils/estado.list';
import cep from 'cep-promise'; //https://www.npmjs.com/package/cep-promise
import { Endereco, EnderecoClass } from 'app/models/endereco/endereco';
const cidades = require('cidades-promise'); //https://www.npmjs.com/package/cidades-promise

export class EnderecoUtil {

    public static cep = cep;

    public static getEstados(): Estado[] {
        return EstadoService.estados;
    }

    public static getEstadosCompleto(): Estado[] {
        let estados: Estado[] = EstadoService.estados;
        estados.map((estado) => {
            estado = EnderecoUtil.getNomeEstadoBySigla(estado.sigla);
         }
        );
        return estados;
    }

    public static getNomeEstadoBySigla(sigla: string): Estado {
        let estados: Estado[] = EstadoService.estados;
        let retorno: Estado = new EstadoClass('', '');
        estados.map((estado) => {
            if (estado.sigla == sigla) {
                retorno = estado;
            } }
        );
        if (retorno.nome = '') {
            window.alert('A sigla não corresponde a um estado!');
        }
        return retorno;
    }

    public static getEstadoBySigla(sigla: string): Estado {
        let estados: Estado[] = EstadoService.estados;
        let retorno: Estado = new EstadoClass('', '');
        estados.map((estado) => {
        if (estado.sigla == sigla) {
            retorno = estado;
            retorno.cidades = EnderecoUtil.getCidadesByEstado(sigla);
        } }
        );
        return retorno;
    }
    
    public static getCidadesByEstado(estadoSigla : string): string[] | any {
        let retorno: string[] = [];
        cidades.getCitiesByState(estadoSigla)
        .then((res: string[]) => {
            return res
        })
        .catch((erro: Erro) => {
            window.alert(erro.erro)
            return []
        })
        
    }

    public static getCidadesByDDD(ddd : number): Cidade {
        let retorno: Cidade = new CidadeClass('');
        cidades.getCitiesByDdd(ddd)
        .then((res: Cidade) => {
            retorno = res
        })
        .catch((erro: Erro) => {
            window.alert(erro.erro)
        })
        return retorno
    }

    public static getEnderecoByCEP(cepNumber: number): Endereco {
        let retorno: Endereco = new EnderecoClass('', '', '', '', '');
        this.cep(cepNumber)
        .then((res: Endereco) => {
            retorno = res
            return retorno
        })
        .catch((erro: ErroCEP) => {
            window.alert(erro.errors[0].message)
        })
        return retorno
    }


}