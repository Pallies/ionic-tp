export class IAlert {
  header: string;
  message: string;
  buttons: string[];
}
export class Alert {
  buttons: string[];
  constructor(public header: string, public message: string, buttons?: number) {
    this.buttons = buttons === 2 ? ['OK', 'CANCEL'] : ['OK'];
  }
}
