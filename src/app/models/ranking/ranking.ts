import { TipoItemRankingEnum } from "../enum/tipo-item-ranking.enum";
import { RankingItem } from "./ranking_item";

export interface Ranking {
  date?: string;
  icon?: string;
  color?: string;

  titulo: string;
  descricao: string;    //no caso do tempo será a data inicio e a final
  afetado?: string;
  mes?: number

  por_porcentagem?: boolean
  tipo_item?: TipoItemRankingEnum

  item_1?: RankingItem;
  item_2?: RankingItem;
  item_3?: RankingItem;

}
