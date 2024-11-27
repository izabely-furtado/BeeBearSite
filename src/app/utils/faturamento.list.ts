import { Faturamento } from "app/models/faturamento/faturamento";
import { FaturamentoItemMock } from "app/models/faturamento/faturamento_item";

export class FaturamentoService {


    
  public static getItemsGeral(): Faturamento[] {
      return [
        { 
          titulo: 'Totais', 
          descricao: 'Considerando todos os eventos', 
        },
        { 
          titulo: 'Venda de Ingressos', 
          descricao: 'Venda de Ingressos, em todos os eventos', 
        },
        { 
          titulo: 'Venda de Produtos', 
          descricao: 'Venda de Produtos, em todos os eventos', 
        },
      ];
  }

  public static getItemsEventos(): Faturamento[] {
    return [
      { 
        titulo: 'Totais', 
        descricao: 'Considerando todos os eventos', 
      },
      { 
        titulo: 'Venda de Ingressos', 
        descricao: 'Venda de Ingressos que cada evento obteve', 
      },
      // { 
      //   titulo: 'Venda de Ingressos por Lote', 
      //   descricao: 'Venda de Ingressos que cada evento obteve, por lote', 
      // },
      // { 
      //   titulo: 'Venda de Ingressos por Tipo de Ingresso', 
      //   descricao: 'Venda de Ingressos que cada evento obteve, por tipo de ingresso', 
      // },
      { 
        titulo: 'Venda de Produtos', 
        descricao: 'Venda de Produtos que cada evento obteve', 
      }
    ];
  }

  public static getItemsProdutos(): Faturamento[] {
    return [
      { 
        titulo: 'Totais', 
        descricao: 'Considerando todos os produtos vendidos', 
      },
      // { 
      //   titulo: 'Tipo de Produto', 
      //   descricao: 'Venda por tipo de produto', 
      // },
      { 
        titulo: 'Venda de Bebidas', 
        descricao: 'Venda por tipo de produto BEBIDAS', 
      },
      { 
        titulo: 'Venda de Comidas', 
        descricao: 'Venda por tipo de produto COMIDA', 
      },
      { 
        titulo: 'Venda de Outros', 
        descricao: 'Venda por tipo de produto OUTROS', 
      }
    ];
  }

  public static getItemsNoTempoMeses(): Faturamento[] {
    return [
      { 
        titulo: 'Janeiro', 
        descricao: '01/01/2024 á 31/01/2024', 
        mes: 1,
        color: '#F22E62' , 
        itens: FaturamentoItemMock.getMockArray(5),
      },
      { 
        titulo: 'Fevereiro', 
        descricao: '01/02/2024 á 31/02/2024', 
        mes: 2,
        color: '#966bf2' , 
        itens: FaturamentoItemMock.getMockArray(5),
      },
      { 
        titulo: 'Março', 
        descricao: '01/03/2024 á 31/03/2024', 
        mes: 3,
        color: '#c2d914' , 
        itens: FaturamentoItemMock.getMockArray(5),
      },
      { 
        titulo: 'Abril', 
        descricao: '01/04/2024 á 31/04/2024', 
        mes: 4,
        color: '#f2cc0c' , 
        itens: FaturamentoItemMock.getMockArray(5),
      },
      { 
        titulo: 'Maio', 
        descricao: '01/05/2024 á 31/05/2024', 
        mes: 5,
        color: '#f24b0f' , 
        itens: FaturamentoItemMock.getMockArray(5),
      },
      { 
        titulo: 'Junho', 
        descricao: '01/06/2024 á 31/06/2024', 
        mes: 6,
        color: '#F22E62' , 
        itens: FaturamentoItemMock.getMockArray(5),
      },
      { 
        titulo: 'Julho', 
        descricao: '01/07/2024 á 31/07/2024', 
        mes: 7,
        color: '#966bf2' , 
        itens: FaturamentoItemMock.getMockArray(5),
      },
      { 
        titulo: 'Agosto', 
        descricao: '01/08/2024 á 31/08/2024', 
        mes: 8,
        color: '#c2d914' , 
        itens: FaturamentoItemMock.getMockArray(5),
      },
      { 
        titulo: 'Setembro', 
        descricao: '01/09/2024 á 31/09/2024', 
        mes: 9,
        color: '#f2cc0c' , 
        itens: FaturamentoItemMock.getMockArray(5),
      },
    ];
  }

  public static getItemsNoTempoEventos(): Faturamento {
    var retorno : Faturamento =  
      { 
        valor_total: 10000.00, 
        color: '#F22E62' , 
        itens: FaturamentoItemMock.getMockArray(15),
      }
    return retorno
  }

  public static getOptions() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
    var options = {
      plugins: {
          legend: {
              labels: {
                  color: textColor
              }
          }
      },
      scales: {
          r: {
              grid: {
                  color: surfaceBorder
              }
          }
      }
    };
    return options
  }

  public static getOptionsGeral() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
    
        var options = {
          maintainAspectRatio: false,
          aspectRatio: 0.6,
          plugins: {
              legend: {
                  labels: {
                      color: textColor
                  }
              }
          },
          scales: {
              x: {
                  ticks: {
                      color: textColorSecondary
                  },
                  grid: {
                      color: surfaceBorder,
                      drawBorder: false
                  }
              },
              y: {
                  ticks: {
                      color: textColorSecondary
                  },
                  grid: {
                      color: surfaceBorder,
                      drawBorder: false
                  }
              }
          }
      };
      return options
  }

  public static getData(label: string, valores: number[], labels: string[]) {
    const documentStyle = getComputedStyle(document.documentElement);
    return {
      datasets: [
          {
              data: valores,
              backgroundColor: [
                  documentStyle.getPropertyValue('--red-500'),
                  documentStyle.getPropertyValue('--green-500'),
                  documentStyle.getPropertyValue('--yellow-500'),
                  documentStyle.getPropertyValue('--bluegray-500'),
                  documentStyle.getPropertyValue('--blue-500')
              ],
              label: label
          }
      ],
      labels: labels
    };
  }

  public static getDataGeral(valoresIngressos: number[], valoresProdutos: number[]) {
    const documentStyle = getComputedStyle(document.documentElement);
    return {
      labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro'],
      datasets: [
          {
              label: 'Ingressos Vendidos',
              data: valoresIngressos,
              fill: false,
              borderColor: documentStyle.getPropertyValue('--blue-500'),
              tension: 0.4
          },
          {
              label: 'Produtos Vendidos',
              data: valoresProdutos,
              fill: false,
              borderColor: documentStyle.getPropertyValue('--pink-500'),
              tension: 0.4
          }
      ]
    };
  }

  public static getDataGeralIngressos(valoresIngressos: number[]) {
    const documentStyle = getComputedStyle(document.documentElement);
    return {
      labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro'],
      datasets: [
          {
              label: 'Ingressos Vendidos',
              data: valoresIngressos,
              fill: false,
              borderColor: documentStyle.getPropertyValue('--blue-500'),
              tension: 0.4
          },
      ]
    };
  }

  public static getDataGeralProdutos(valoresProdutos: number[]) {
    const documentStyle = getComputedStyle(document.documentElement);
    return {
      labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro'],
      datasets: [
          {
              label: 'Produtos Vendidos',
              data: valoresProdutos,
              fill: false,
              borderColor: documentStyle.getPropertyValue('--pink-500'),
              tension: 0.4
          }
      ]
    };
  }


}

