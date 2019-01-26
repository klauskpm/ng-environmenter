import { Inject, Injectable } from '@angular/core';
import { ENVIRONMENTER } from './environmenter.token';

@Injectable({
  providedIn: 'root'
})
export class Environmenter {

  constructor(
    @Inject(ENVIRONMENTER) private environment: any
  ) { }

  public getGlobalEnvironment() {
    return this.environment.global;
  }

  public getApplicationEnvironment() {
    return this.environment.application;
  }

  public getEnvironment() {
    const { global, application } = this.environment ;

    return {
      ...global,
      ...application
    };
  }
}
