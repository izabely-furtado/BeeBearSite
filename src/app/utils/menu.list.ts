import { MenuItem } from "primeng/api";

export class MenuService {
    
  public static getPositionOptions() {
      return [
        {
            label: 'Bottom',
            value: 'bottom'
        },
        {
            label: 'Top',
            value: 'top'
        },
        {
            label: 'Left',
            value: 'left'
        },
        {
            label: 'Right',
            value: 'right'
        }
    ];
  }


  public static getItemsMenuCadastro(): MenuItem[] {
      return [
          
          {
              label: 'Clientes',
              icon: './assets/images/3D-Icons/60.png',
              url: './cadastro/clientes',
              target: '_self'
          },
          {
            label: 'Colaboradores',
            icon: './assets/images/3D-Icons/70.png',
            url: './cadastro/colaboradores',
            target: '_self'
          },
          {
            label: 'Cupons',
            icon: './assets/images/3D-Icons/66.png',
            url: './cadastro/cupons',
            target: '_self'
          },
          {
            label: 'Lotes/Ingressos',
            icon: './assets/images/3D-Icons/63.png',
            url: './cadastro/lotes_ingressos',
            target: '_self'
          },
          {
            label: 'Planos de Contrato',
            icon: './assets/images/3D-Icons/39.png',
            url: './cadastro/planos_contratado',
            target: '_self'
          },
          {
              label: 'Produtos',
              icon: './assets/images/3D-Icons/65.png',
              url: './cadastro/produtos',
              target: '_self'
          },
          {
              label: 'Regras',
              icon: './assets/images/3D-Icons/62.png',
              url: './cadastro/regras',
              target: '_self'
          },
      ];
  }

public static getItemsMenuRanking(): MenuItem[] {
  return [
      
      {
          label: 'TOP do TOP',
          icon: './assets/images/3D-Icons/30.png',
          url: './ranking/tipo/TOP%20do%20TOP',
          target: '_self'
      },
      {
        label: 'No Tempo',
        icon: './assets/images/3D-Icons/73.png',
        url: './ranking/No%20Tempo',
        target: '_self'
      },
      {
          label: 'Melhores Colaboradores',
          icon: './assets/images/3D-Icons/54.png',
          url: './ranking/tipo/Melhores%20Colaboradores',
          target: '_self'
      },
      {
        label: 'Melhores Eventos',
        icon: './assets/images/3D-Icons/34.png',
        url: './ranking/tipo/Melhores%20Eventos',
        target: '_self'
      },
      {
        label: 'Melhores Produtos',
        icon: './assets/images/3D-Icons/29.png',
        url: './ranking/tipo/Melhores%20Produtos',
        target: '_self'
      },
      {
        label: 'Pode Melhorar',
        icon: './assets/images/3D-Icons/5.png',
        url: './ranking/tipo/Pode%20Melhorar',
        target: '_self'
      },
  ];
}

public static getItemsMenuEventos(): MenuItem[] {
  return [
      
      {
          label: 'Com Pendências',
          icon: './assets/images/3D-Icons/45.png',
          url: './eventos/tipo/Com%20Pendências',
          target: '_self'
      },
      {
        label: 'Ocorrendo Hoje',
        icon: './assets/images/3D-Icons/23.png',
        url: './eventos/tipo/Ocorrendo%20Hoje',
        target: '_self'
      },
      {
        label: 'Mais Acessados',
        icon: './assets/images/3D-Icons/48.png',
        url: './eventos/tipo/Mais%20Acessados',
        target: '_self'
      },
      {
        label: 'Iniciados',
        icon: './assets/images/3D-Icons/64.png',
        url: './eventos/tipo/Iniciados',
        target: '_self'
      },
      {
      label: 'Finalizados',
        icon: './assets/images/3D-Icons/62.png',
        url: './eventos/tipo/Finalizados',
        target: '_self'
      },
      {
        label: 'Cancelados',
        icon: './assets/images/3D-Icons/5.png',
        url: './eventos/tipo/Cancelados',
        target: '_self'
      },
  ];
}

public static getItemsMenuFaturamento(): MenuItem[] {
  return [
      
      {
          label: 'Geral',
          icon: './assets/images/3D-Icons/52.png',
          url: './faturamento/Geral',
          target: '_self'
      },
      {
        label: 'Eventos',
        icon: './assets/images/3D-Icons/64.png',
        url: './faturamento/Eventos',
        target: '_self'
      },
      {
          label: 'Produtos',
          icon: './assets/images/3D-Icons/36.png',
          url: './faturamento/Produtos',
          target: '_self'
      },
  ];
}
  public static getItemsMenu() {
    return [
        {
            label: 'Programação',
            icon: './assets/images/3D-Icons/63.png',
            url: './programacao',
            target: '_self'
        },
        {
            label: 'Parceiros',
            icon: './assets/images/3D-Icons/67.png',
            url: './parceiros',
            target: '_self'
        },
        {
            label: 'Para Empresas',
            icon: './assets/images/3D-Icons/60.png',
            url: './pempresas',
            target: '_self'
        },
        {
            label: 'Promoções',
            icon: './assets/images/3D-Icons/36.png',
            url: './promocoes',
            target: '_self'
        },
        {
            label: 'Pesquisa',
            icon: './assets/images/3D-Icons/31.png',
            url: './pesquisa',
            target: '_self'
        },
        {
            label: 'Carrinho',
            icon: './assets/images/3D-Icons/17.png',
            url: './carrinho',
            target: '_self'
        },
        {
            label: 'Favoritos',
            icon: './assets/images/3D-Icons/47.png',
            url: './favoritos',
            target: '_self'
        },
        {
            label: 'Perfil',
            icon: './assets/images/3D-Icons/70.png',
            url: './perfil',
            target: '_self'
        }
    ];
  }

  public static getResponsiveOptions() {
    return [
      {
          breakpoint: '1024px',
          numVisible: 3,
          numScroll: 3
      },
      {
          breakpoint: '768px',
          numVisible: 2,
          numScroll: 2
      },
      {
          breakpoint: '560px',
          numVisible: 1,
          numScroll: 1
      }
    ];
  }


}