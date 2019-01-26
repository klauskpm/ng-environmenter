import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ENVIRONMENTER } from './environmenter.token';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class EnvironmenterModule {
  static forRoot(environment): ModuleWithProviders {
    return {
      ngModule: EnvironmenterModule,
      providers: [
        { provide: ENVIRONMENTER, useValue: environment }
      ]
    };
  }
}
