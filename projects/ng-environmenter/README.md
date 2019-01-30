# ng-environmenter
Angular environment sharing done easy

![](https://img.shields.io/github/issues/klauskpm/ng-environmenter.svg)
![](https://img.shields.io/github/license/klauskpm/ng-environmenter.svg)

## Getting started
Install the package:
`npm install ng-environmenter`

### Environment configuration
Create a `environments` folder at root level of your workspace, and a environment file for each environment, like the following:
```typescript
// environments/environment.ts
export const globalEnvironment = {
  production: false,
};
```

And extend it on yours application environment file:
```typescript
// projects/app/src/environments/environment.ts
import { globalEnvironment } from '../../../../environments/environment.ts';

export const environment = {
  application: {},
  global: globalEnvironment
};
```

### Implementing the Environmenter
Add it to your AppModule:
```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { EnvironmenterModule } from 'ng-environmenter';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    EnvironmenterModule.forRoot(environment)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

And inject the `Environmenter` on any file:
```typescript
import { Component } from '@angular/core';
import { Environmenter } from 'ng-environmenter';

@Component({
  selector: 'app-component',
  template: `
    <p>{{ getEnvironment() | json }}</p>
  `,
})
export class AppComponent {
  constructor(
    private environmenter: Environmenter
  ) {}

  getEnvironment() {
    return [
      this.environmenter.getApplicationEnvironment(),
      this.environmenter.getGlobalEnvironment(),
      this.environmenter.getEnvironment(),
    ];
  }
}
```
