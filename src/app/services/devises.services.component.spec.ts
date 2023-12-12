import { TestBed } from '@angular/core/testing';
import { DevisesService } from './devise.services.component';


describe('DevisesService', () => { // Remplacement de 'ProduitsService' par 'DevisesService'
  let service: DevisesService; // Remplacement de 'ProduitsService' par 'DevisesService'

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DevisesService); // Remplacement de 'ProduitsService' par 'DevisesService'
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
