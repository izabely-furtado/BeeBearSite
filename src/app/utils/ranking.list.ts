import { Ranking } from "app/models/ranking/ranking";
import { RankingItemMock } from "app/models/ranking/ranking_item";


export class RankingService {


    
  public static getItemsTopDoTop(): Ranking[] {
      return [
        { 
          titulo: 'Influenciadores + influentes', 
          descricao: 'Com mais nome na lista e que realmente foi aos eventos', 
          afetado: 'pessoas da lista foram realmente',
          icon: 'pi pi-star', 
          color: '#F22E62', 
          item_1: RankingItemMock.getMock(),
          item_2: RankingItemMock.getMock(),
          item_3: RankingItemMock.getMock()
        },
        { 
          titulo: 'Controladores de Estoque de Elite', 
          descricao: 'Que mais registraram baixa nos produtos, que mais entregaram', 
          afetado: 'produtos foram entregues',
          icon: 'pi pi-cog', 
          color: '#966bf2' , 
          item_1: RankingItemMock.getMock(),
          item_2: RankingItemMock.getMock(),
          item_3: RankingItemMock.getMock()
        },
        { 
          titulo: 'Playlist c/ + play', 
          descricao: 'Playlist entre os eventos que mais foi acessada', 
          afetado: 'pessoas acessaram a playlist',
          icon: 'pi pi-play', 
          color: '#c2d914' , 
          item_1: RankingItemMock.getMock(),
          item_2: RankingItemMock.getMock(),
          item_3: RankingItemMock.getMock()
        },
        { 
          titulo: 'Evento + lotado', 
          descricao: 'Evento com mais pessoas/metro²', 
          afetado: 'pessoas foram ao evento',
          icon: 'pi pi-calendar-plus', 
          color: '#f2cc0c' , 
          item_1: RankingItemMock.getMock(),
          item_2: RankingItemMock.getMock(),
          item_3: RankingItemMock.getMock()
        },
        { 
          titulo: 'Evento com + venda de produtos', 
          descricao: 'Evento onde mais pensaram que só se vive uma vez', 
          afetado: 'produtos',
          icon: 'pi pi-cart-plus', 
          color: '#f24b0f' , 
          item_1: RankingItemMock.getMock(),
          item_2: RankingItemMock.getMock(),
          item_3: RankingItemMock.getMock()
        },
        { 
          titulo: 'Queridinho da galera', 
          descricao: 'Produto mais vendido', 
          afetado: 'produtos',
          icon: 'pi pi-heart', 
          color: '#F22E62' , 
          item_1: RankingItemMock.getMock(),
          item_2: RankingItemMock.getMock(),
          item_3: RankingItemMock.getMock()
        },
      ];
  }

  public static getItemsMelhoresColaboradores(): Ranking[] {
    return [
      { 
        titulo: 'Influenciadores + influentes', 
        descricao: 'Com mais nome na lista e que realmente foi aos eventos', 
        afetado: 'pessoas da lista foram realmente',
        icon: 'pi pi-star', 
        color: '#F22E62',  
        item_1: RankingItemMock.getMock(),
        item_2: RankingItemMock.getMock(),
        item_3: RankingItemMock.getMock()
      },
      { 
        titulo: 'Controladores de Estoque de Elite', 
        descricao: 'Que mais registraram baixa nos produtos, que mais entregaram', 
        afetado: 'produtos foram entregues',
        icon: 'pi pi-cog', 
        color: '#966bf2' , 
        item_1: RankingItemMock.getMock(),
        item_2: RankingItemMock.getMock(),
        item_3: RankingItemMock.getMock()
      },
      { 
        titulo: 'Playlist c/ + play', 
        descricao: 'Playlist entre os eventos que mais foi acessada', 
        afetado: 'pessoas acessaram a playlist',
        icon: 'pi pi-play', 
        color: '#c2d914' , 
        item_1: RankingItemMock.getMock(),
        item_2: RankingItemMock.getMock(),
        item_3: RankingItemMock.getMock()
      },
      { 
        titulo: 'Cadastradores de Elite', 
        descricao: 'Cadastravam os eventos de forma mais completa', 
        afetado: 'eventos cadastrados por completo',
        icon: 'pi pi-shopping-cart', 
        color: '#f2cc0c' , 
        item_1: RankingItemMock.getMock(),
        item_2: RankingItemMock.getMock(),
        item_3: RankingItemMock.getMock()
      }
    ];
  }

  public static getItemsMelhoresEventos(): Ranking[] {
    return [
      { 
        titulo: 'Influenciadores + influentes', 
        descricao: 'Com mais nome na lista e que realmente foi aos eventos', 
        afetado: 'pessoas da lista foram realmente',
        icon: 'pi pi-star', 
        color: '#F22E62', 
        item_1: RankingItemMock.getMock(),
        item_2: RankingItemMock.getMock(),
        item_3: RankingItemMock.getMock()
      },
      { 
        titulo: 'Evento com + venda de produtos', 
        descricao: 'Evento onde mais pensaram que só se vive uma vez', 
        afetado: 'produtos foram vendidos',
        icon: 'pi pi-cog', 
        color: '#966bf2' , 
        item_1: RankingItemMock.getMock(),
        item_2: RankingItemMock.getMock(),
        item_3: RankingItemMock.getMock()
      },
      { 
        titulo: 'Playlist c/ + play', 
        descricao: 'Playlist entre os eventos que mais foi acessada', 
        afetado: 'pessoas acessaram a playlist',
        icon: 'pi pi-play', 
        color: '#c2d914' , 
        item_1: RankingItemMock.getMock(),
        item_2: RankingItemMock.getMock(),
        item_3: RankingItemMock.getMock()
      },
      { 
        titulo: 'Evento + lotado', 
        descricao: 'Evento com mais pessoas/metro²', 
        afetado: 'pessoas estavam no evento',
        icon: 'pi pi-users', 
        color: '#f2cc0c' , 
        item_1: RankingItemMock.getMock(),
        item_2: RankingItemMock.getMock(),
        item_3: RankingItemMock.getMock()
      },
      { 
        titulo: 'Venda mais rápida TOTAL', 
        descricao: 'Concorrido ele gente, quem moscou não foi',
        afetado: 'minutos',
        icon: 'pi pi-bolt', 
        color: '#f24b0f' , 
        item_1: RankingItemMock.getMock(),
        item_2: RankingItemMock.getMock(),
        item_3: RankingItemMock.getMock()
      },
      { 
        titulo: 'Venda mais rápida 100 primeiros', 
        descricao: 'Pessoal apressadinho sabe, adiantado', 
        afetado: 'minutos',
        icon: 'pi pi-bolt', 
        color: '#F22E62' , 
        item_1: RankingItemMock.getMock(),
        item_2: RankingItemMock.getMock(),
        item_3: RankingItemMock.getMock()
      },
    ];
  }

  public static getItemsMelhoresProdutos(): Ranking[] {
    return [
      { 
        titulo: 'Produtos mais vendidos na empresa - Quantidade Total', 
        descricao: 'Queridinhos da galera na empresa', 
        afetado: 'produtos foram vendidos',
        icon: 'pi pi-shopping-cart', 
        color: '#F22E62', 
        item_1: RankingItemMock.getMock(),
        item_2: RankingItemMock.getMock(),
        item_3: RankingItemMock.getMock()
      },
      { 
        titulo: 'Produtos mais vendidos na empresa - %', 
        descricao: 'Tá na moda né gente', 
        afetado: 'dos produtos foram vendidos',
        icon: 'pi pi-percentage', 
        color: '#966bf2' , 
        item_1: RankingItemMock.getMock(),
        item_2: RankingItemMock.getMock(),
        item_3: RankingItemMock.getMock()
      },
      { 
        titulo: 'Produtos Miss Universo', 
        descricao: 'Produtos mais vendidos GERAL (Total de Clientes BEE BEAR)', 
        afetado: 'produtos foram comprados',
        icon: 'pi pi-heart', 
        color: '#c2d914' , 
        item_1: RankingItemMock.getMock(),
        item_2: RankingItemMock.getMock(),
        item_3: RankingItemMock.getMock()
      },
      { 
        titulo: 'Evento com + venda de produtos', 
          descricao: 'Evento onde mais pensaram que só se vive uma vez', 
          afetado: 'produtos foram comprados',
        icon: 'pi pi-calendar-plus', 
        color: '#f2cc0c' , 
        item_1: RankingItemMock.getMock(),
        item_2: RankingItemMock.getMock(),
        item_3: RankingItemMock.getMock()
      }
    ];
  }

  public static getItemsPodeMelhorar(): Ranking[] {
    return [
      { 
        titulo: 'Produtos menos comprados', 
        descricao: 'Esses não são a última bolachinha do pacote, não são essa coca-cola toda', 
        afetado: 'produtos foram comprados',
        icon: 'pi pi-shopping-cart', 
        color: '#F22E62', 
        item_1: RankingItemMock.getMock(),
        item_2: RankingItemMock.getMock(),
        item_3: RankingItemMock.getMock()
      },
      { 
        titulo: 'Entregador que não entrega', 
        descricao: 'Aqueles vendedores/entregadores que menos deram baixa em produtos', 
        afetado: 'produtos foram entregues',
        icon: 'pi pi-eye-slash', 
        color: '#966bf2' , 
        item_1: RankingItemMock.getMock(),
        item_2: RankingItemMock.getMock(),
        item_3: RankingItemMock.getMock()
      },
      { 
        titulo: 'Evento mais vazio - %', 
        descricao: 'Chegou a passar um feno rolando no rolê e estava tocando lonely do Akon, certeza', 
        afetado: 'pessoas foram',
        icon: 'pi pi-user-minus', 
        color: '#c2d914' , 
        item_1: RankingItemMock.getMock(),
        item_2: RankingItemMock.getMock(),
        item_3: RankingItemMock.getMock()
      },
      { 
        titulo: 'Evento com menos venda de produto', 
        descricao: 'Quase certeza que esse aqui ocorreu em fim de mês, ninguém tinha recebido', 
        afetado: 'produtos foram vendidos neste evento',
        icon: 'pi pi-eye-slash', 
        color: '#f2cc0c' , 
        item_1: RankingItemMock.getMock(),
        item_2: RankingItemMock.getMock(),
        item_3: RankingItemMock.getMock()
      },
      { 
        titulo: 'Evento com maior desistência', 
        descricao: 'Muita gente acabou tendo que mandar desculpas esfarrapadas, certeza. Me ajuda a te ajudar', 
        afetado: 'pessoas desistam deste evento',
        icon: 'pi pi-calendar-minus', 
        color: '#f24b0f' , 
        item_1: RankingItemMock.getMock(),
        item_2: RankingItemMock.getMock(),
        item_3: RankingItemMock.getMock()
      }
    ];
  }

  public static getItemsNoTempo(): Ranking[] {
    return [
      { 
        titulo: 'Influenciadores + influentes', 
        descricao: 'Com mais nome na lista e que realmente foi aos eventos', 
        afetado: 'pessoas da lista foram realmente',
      },
      { 
        titulo: 'Controladores de Estoque de Elite', 
        descricao: 'Que mais registraram baixa nos produtos, que mais entregaram', 
        afetado: 'produtos foram entregues',
      },
      { 
        titulo: 'Playlist c/ + play', 
        descricao: 'Playlist entre os eventos que mais foi acessada', 
        afetado: 'pessoas acessaram a playlist'
      },
      { 
        titulo: 'Evento + lotado', 
        descricao: 'Evento com mais pessoas/metro²', 
        afetado: 'pessoas foram ao evento'
      },
      { 
        titulo: 'Evento com + venda de produtos', 
        descricao: 'Evento onde mais pensaram que só se vive uma vez', 
        afetado: 'produtos'
      },
      { 
        titulo: 'Queridinho da galera', 
        descricao: 'Produto mais vendido', 
        afetado: 'produtos'
      },
      { 
        titulo: 'Produtos menos comprados', 
        descricao: 'Esses não são a última bolachinha do pacote, não são essa coca-cola toda', 
        afetado: 'produtos foram comprados'
      },
      { 
        titulo: 'Entregador que não entrega', 
        descricao: 'Aqueles vendedores/entregadores que menos deram baixa em produtos', 
        afetado: 'produtos foram entregues',
      },
      { 
        titulo: 'Evento mais vazio - %', 
        descricao: 'Chegou a passar um feno rolando no rolê e estava tocando lonely do Akon, certeza', 
        afetado: 'pessoas foram'
      },
      { 
        titulo: 'Evento com menos venda de produto', 
        descricao: 'Quase certeza que esse aqui ocorreu em fim de mês, ninguém tinha recebido', 
        afetado: 'produtos foram vendidos neste evento'
      },
      { 
        titulo: 'Evento com maior desistência', 
        descricao: 'Muita gente acabou tendo que mandar desculpas esfarrapadas, certeza. Me ajuda a te ajudar', 
        afetado: 'pessoas desistam deste evento'
      }
    ];
  }

  public static getItemsNoTempoMeses(): Ranking[] {
    return [
      { 
        titulo: 'Janeiro', 
        descricao: '01/01/2024 á 31/01/2024', 
        mes: 1,
        color: '#F22E62' , 
        item_1: RankingItemMock.getMock(),
        item_2: RankingItemMock.getMock(),
        item_3: RankingItemMock.getMock()
      },
      { 
        titulo: 'Fevereiro', 
        descricao: '01/02/2024 á 31/02/2024', 
        mes: 2,
        color: '#966bf2' , 
        item_1: RankingItemMock.getMock(),
        item_2: RankingItemMock.getMock(),
        item_3: RankingItemMock.getMock()
      },
      { 
        titulo: 'Março', 
        descricao: '01/03/2024 á 31/03/2024', 
        mes: 3,
        color: '#c2d914' , 
        item_1: RankingItemMock.getMock(),
        item_2: RankingItemMock.getMock(),
        item_3: RankingItemMock.getMock()
      },
      { 
        titulo: 'Abril', 
        descricao: '01/04/2024 á 31/04/2024', 
        mes: 4,
        color: '#f2cc0c' , 
        item_1: RankingItemMock.getMock(),
        item_2: RankingItemMock.getMock(),
        item_3: RankingItemMock.getMock()
      },
      { 
        titulo: 'Maio', 
        descricao: '01/05/2024 á 31/05/2024', 
        mes: 5,
        color: '#f24b0f' , 
        item_1: RankingItemMock.getMock(),
        item_2: RankingItemMock.getMock(),
        item_3: RankingItemMock.getMock()
      },
      { 
        titulo: 'Junho', 
        descricao: '01/06/2024 á 31/06/2024', 
        mes: 6,
        color: '#F22E62' , 
        item_1: RankingItemMock.getMock(),
        item_2: RankingItemMock.getMock(),
        item_3: RankingItemMock.getMock()
      },
      { 
        titulo: 'Julho', 
        descricao: '01/07/2024 á 31/07/2024', 
        mes: 7,
        color: '#966bf2' , 
        item_1: RankingItemMock.getMock(),
        item_2: RankingItemMock.getMock(),
        item_3: RankingItemMock.getMock()
      },
      { 
        titulo: 'Agosto', 
        descricao: '01/08/2024 á 31/08/2024', 
        mes: 8,
        color: '#c2d914' , 
        item_1: RankingItemMock.getMock(),
        item_2: RankingItemMock.getMock(),
        item_3: RankingItemMock.getMock()
      },
      { 
        titulo: 'Setembro', 
        descricao: '01/09/2024 á 31/09/2024', 
        mes: 9,
        color: '#f2cc0c' , 
        item_1: RankingItemMock.getMock(),
        item_2: RankingItemMock.getMock(),
        item_3: RankingItemMock.getMock()
      },
    ];
  }


}

