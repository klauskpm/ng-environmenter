import { TestBed } from '@angular/core/testing';

import { Environmenter } from './environmenter.service';
import {EnvironmenterModule} from './environmenter.module';

const environment = {
  global: { production: false, title: 'global', shareIt: true },
  application: { production: false, title: 'application' },
  newText: ''
};

describe('Environmenter', () => {
  let service: Environmenter;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        EnvironmenterModule.forRoot(environment)
      ]
    });

    service = TestBed.get(Environmenter);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('#getGlobalEnvironment', () => {
    it('should return the global environment', () => {
      const globalEnvironment = service.getGlobalEnvironment();
      expect(globalEnvironment.title).toEqual(environment.global.title);
      expect(globalEnvironment.shareIt).toEqual(environment.global.shareIt);
      expect(globalEnvironment.title).not.toEqual(environment.application.title);
    });
  });

  describe('#getApplicationEnvironment', () => {
    it('should return the application environment', () => {
      const globalEnvironment = service.getApplicationEnvironment();
      expect(globalEnvironment.title).toEqual(environment.application.title);
      expect(globalEnvironment.shareIt).toBeUndefined();
      expect(globalEnvironment.title).not.toEqual(environment.global.title);
    });
  });

  describe('#getEnvironment', () => {
    it('should return a mix of global and application environments', () => {
      const globalEnvironment = service.getEnvironment();
      expect(globalEnvironment.title).toEqual(environment.application.title);
      expect(globalEnvironment.shareIt).toEqual(environment.global.shareIt);
    });
  });
});
