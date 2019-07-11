import { TestBed } from '@angular/core/testing';

import { FetchPokemonService } from './fetch-pokemon.service';

describe('FetchPokemonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FetchPokemonService = TestBed.get(FetchPokemonService);
    expect(service).toBeTruthy();
  });
});
