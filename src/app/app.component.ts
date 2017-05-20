import { Component } from '@angular/core';
declare var require: any;
@Component({
  selector: 'app-root',
  template: require('pug-loader!./app.component.pug')(),
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Spanish food I would bath in:';

  foodies = ['migas', 'arranque roteño', 'tortilla de patata', 'salmorejo',
  'churros', 'gazpacho', 'ajoblanco', 'sopa castellana', 'ajoarriero', 'bollo preñao'];
}
