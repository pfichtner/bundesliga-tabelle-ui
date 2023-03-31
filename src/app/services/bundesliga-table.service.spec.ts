import { TestBed } from '@angular/core/testing';

import { BundesligaTableService } from './bundesliga-table.service';

describe('BundesligaTableService', () => {
  let service: BundesligaTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BundesligaTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should map backend model to frontend model', ()=> {
    const testDataFromBackend = [
      {
        "platz": 1,
        "wappen": "wappen",
        "team": "Team",
        "spiele": 2,
        "punkte": 3,
        "tore": 4,
        "gegentore": 5,
        "tordifferenz": -1,
        "siege": 6,
        "unentschieden": 7,
        "niederlagen": 8,
        "letzte5": "SNNNN"
      }
    ];

    expect(service.transformToUIModel(testDataFromBackend)).toEqual([{
      "platz": 1,
      "wappen": "wappen",
      "team": "Team",
      "spiele": 2,
      "punkte": 3,
      "tore": 4,
      "gegentore": 5,
      "tordifferenz": -1,
      "siege": 6,
      "unentschieden": 7,
      "niederlagen": 8,
      "letzte5": [
        "../../assets/sieg.svg",
        "../../assets/niederlage.svg",
        "../../assets/niederlage.svg",
        "../../assets/niederlage.svg",
        "../../assets/niederlage.svg"
      ]
    }]);
  });
});
