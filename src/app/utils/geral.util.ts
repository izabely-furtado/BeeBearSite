export class GeralUtil {
    

  public static createId(): string {
    let id = '';
    let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 5; i++) {
      id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return id;
  }

  public static formatDate(data: Date): string {
    let data_formatada = '';
    if (data!= null) {
      let dia = data.getDate();
      let mes = data.getMonth();
      let ano = data.getFullYear();
      if (dia <= 9) { data_formatada += '0'  }
      data_formatada += dia + '/'
      if (mes <= 9) { data_formatada += '0'  }
      data_formatada += mes + '/'
      data_formatada += data.getFullYear();
    }    
    return data_formatada
  }
}