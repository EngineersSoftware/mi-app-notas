import { Component, input } from '@angular/core';

@Component({
  selector: 'app-alert',
  imports: [],
  template: `
  <div class="alert-box">
    <span>Aviso Importante: {{ mensaje() }}</span>
  </div>
  `,
  styles: [`.alert-box { background: #e3f2fd; padding: 12px; border-left: 5px solid #2196f3; margin-bottom: 15px; border-radiuss: 4px;}`]
})
export class Alert {

  mensaje = input<string>('Mensaje por ejemplo');

}
