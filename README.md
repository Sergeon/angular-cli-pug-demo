# angular-cli-pug-demo
A demo on how to get angular-cli 1.0.4 to work with pug without to mess with the webpack config or eject

After searching a bit about how to work with .pug and .jade files with Angular4, I only found articles that get it to work by ejecting the configuration to webpack with `ng eject`.

Then by reading (this issue)[https://github.com/angular/angular-cli/issues/996] I figured out how to get `-pug` files to work without ejecting the configuration. 

## dependencies

You must install `pug` and `pug-loader` packages:

```
    npm install --save-dev pug pug-loader
```

Then you have to load the `.pug` file to the `template` component metadata as a string, throught the `pug-loader`. 
A call to `require` is needed, so you must to declare it too:

```typescript
import { Component } from '@angular/core';
declare var require: any;
@Component({
  selector: 'app-root',
  template: require('pug-loader!./app.component.pug')(),
  styleUrls: ['./app.component.css']
})
export class AppComponent {
}
```

Then you can use `app.component.pug` (or with `.jade` extension ) as html. It will support angular structural directives, inner components etc.

### Just run it through `ng serve` to display a glorious list of spanish foodies.

