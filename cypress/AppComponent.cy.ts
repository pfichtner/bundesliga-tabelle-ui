import {AppComponent} from "../src/app/app.component";

describe('AppComponent.cy.ts', () => {
  it('mounts', () => {
    cy.mount(AppComponent);
  });

  it('displays one team', () => {
    cy.mount(AppComponent, {
      componentProperties: {
        table: [
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
            "letzte5": [
              "../../assets/sieg.svg",
              "../../assets/niederlage.svg",
              "../../assets/niederlage.svg",
              "../../assets/niederlage.svg",
              "../../assets/niederlage.svg"
            ]
          }
        ]
      }
    });
    cy.get('[data-cy="teamname"]').should('have.text', 'Borussia Dortmund');
  });
});
