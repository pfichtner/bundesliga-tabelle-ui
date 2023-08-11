import {Interaction, Pact} from "@pact-foundation/pact";
import {BundesligaTableService} from "./bundesliga-table.service";
import {TestBed} from "@angular/core/testing";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {Team} from "../models/team.ui.model";
import {HttpClientModule} from "@angular/common/http";

const provider = new Pact({
  dir: './pacts',
  consumer: 'BundesligaFrontend',
  provider: 'BundesligaBackend'
});
describe('BundesligaTabelleUIService', () => {
  let service: BundesligaTableService;

  beforeAll(async() => {
    await provider.setup();
  })

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(BundesligaTableService);
  });

  afterAll(() => provider.finalize());

  afterEach(() => provider.verify());

  it('should provide bundesliga data', (done) => {
    provider.addInteraction(new Interaction()
      .given('matchday #1 first team has one win, one draw and one loss')
      .uponReceiving('a request to get the bundesliga standings')
      .withRequest({
        method: 'GET',
        path: '/tabelle/bl1/2023',
        headers: {Accept: 'application/json'}
      })
      .willRespondWith({
        status: 200,
        headers: {'Content-Type': 'application/json'},
        body: [
          {
            "platz": 1,
            "wappen": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Borussia_Dortmund_logo.svg/560px-Borussia_Dortmund_logo.svg.png",
            "team": "Borussia Dortmund",
            "spiele": 25,
            "punkte": 53,
            "tore": 55,
            "gegentore": 31,
            "tordifferenz": 24,
            "siege": 17,
            "unentschieden": 2,
            "niederlagen": 6,
            "letzte5": "SUN"
          },
        ]
      }));
    service.getTableFromServer(provider.mockService.baseUrl).subscribe(table => {
      expect(table.length).toBe(1);
      expect(table[0].letzte5).toEqual(['../../assets/sieg.svg', '../../assets/unentschieden.svg', '../../assets/niederlage.svg'])
      done();
    });
  }, 50000);

});
