import {Injectable} from '@angular/core';
import {map, Observable, of} from "rxjs";
import {TeamBackend} from "../models/team.backend.model";
import {Team} from "../models/team.ui.model";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BundesligaTableService {

  constructor(private httpClient: HttpClient) {
  }
  getTable(season?: number): Observable<Team[]> {
    return of( //TODO: replace Dummy Data
      this.transformToUIModel([
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
          "letzte5": "SUSSS"
        },
        {
          "platz": 2,
          "wappen": "https://i.imgur.com/jJEsJrj.png",
          "team": "FC Bayern München",
          "spiele": 25,
          "punkte": 52,
          "tore": 72,
          "gegentore": 27,
          "tordifferenz": 45,
          "siege": 15,
          "unentschieden": 7,
          "niederlagen": 3,
          "letzte5": "NSSSN"
        },
        {
          "platz": 3,
          "wappen": "https://assets.dfb.de/uploads/000/018/232/small_union-Berlin.jpg",
          "team": "1. FC Union Berlin",
          "spiele": 25,
          "punkte": 48,
          "tore": 38,
          "gegentore": 28,
          "tordifferenz": 10,
          "siege": 14,
          "unentschieden": 6,
          "niederlagen": 5,
          "letzte5": "SUUNU"
        },
        {
          "platz": 4,
          "wappen": "https://i.imgur.com/r3mvi0h.png",
          "team": "SC Freiburg",
          "spiele": 25,
          "punkte": 46,
          "tore": 38,
          "gegentore": 34,
          "tordifferenz": 4,
          "siege": 13,
          "unentschieden": 7,
          "niederlagen": 5,
          "letzte5": "USUUS"
        },
        {
          "platz": 5,
          "wappen": "https://i.imgur.com/Rpwsjz1.png",
          "team": "RB Leipzig",
          "spiele": 25,
          "punkte": 45,
          "tore": 49,
          "gegentore": 30,
          "tordifferenz": 19,
          "siege": 13,
          "unentschieden": 6,
          "niederlagen": 6,
          "letzte5": "NSNSS"
        },
        {
          "platz": 6,
          "wappen": "https://i.imgur.com/X8NFkOb.png",
          "team": "Eintracht Frankfurt",
          "spiele": 25,
          "punkte": 40,
          "tore": 46,
          "gegentore": 36,
          "tordifferenz": 10,
          "siege": 11,
          "unentschieden": 7,
          "niederlagen": 7,
          "letzte5": "NUUNS"
        },
        {
          "platz": 7,
          "wappen": "https://i.imgur.com/ucqKV4B.png",
          "team": "VfL Wolfsburg",
          "spiele": 25,
          "punkte": 38,
          "tore": 44,
          "gegentore": 32,
          "tordifferenz": 12,
          "siege": 10,
          "unentschieden": 8,
          "niederlagen": 7,
          "letzte5": "SUUSN"
        },
        {
          "platz": 8,
          "wappen": "https://upload.wikimedia.org/wikipedia/de/thumb/f/f7/Bayer_Leverkusen_Logo.svg/1200px-Bayer_Leverkusen_Logo.svg.png",
          "team": "Bayer Leverkusen",
          "spiele": 25,
          "punkte": 37,
          "tore": 45,
          "gegentore": 40,
          "tordifferenz": 5,
          "siege": 11,
          "unentschieden": 4,
          "niederlagen": 10,
          "letzte5": "SSSUN"
        },
        {
          "platz": 9,
          "wappen": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Logo_Mainz_05.svg/1200px-Logo_Mainz_05.svg.png",
          "team": "1. FSV Mainz 05",
          "spiele": 25,
          "punkte": 37,
          "tore": 40,
          "gegentore": 36,
          "tordifferenz": 4,
          "siege": 10,
          "unentschieden": 7,
          "niederlagen": 8,
          "letzte5": "UUSSS"
        },
        {
          "platz": 10,
          "wappen": "https://i.imgur.com/KSIk0Eu.png",
          "team": "Borussia Mönchengladbach",
          "spiele": 25,
          "punkte": 31,
          "tore": 40,
          "gegentore": 44,
          "tordifferenz": -4,
          "siege": 8,
          "unentschieden": 7,
          "niederlagen": 10,
          "letzte5": "UNUNS"
        },
        {
          "platz": 11,
          "wappen": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/SV-Werder-Bremen-Logo.svg/681px-SV-Werder-Bremen-Logo.svg.png",
          "team": "Werder Bremen",
          "spiele": 25,
          "punkte": 31,
          "tore": 39,
          "gegentore": 48,
          "tordifferenz": -9,
          "siege": 9,
          "unentschieden": 4,
          "niederlagen": 12,
          "letzte5": "UNNSN"
        },
        {
          "platz": 12,
          "wappen": "https://i.imgur.com/sdE62e2.png",
          "team": "FC Augsburg",
          "spiele": 25,
          "punkte": 28,
          "tore": 32,
          "gegentore": 45,
          "tordifferenz": -13,
          "siege": 8,
          "unentschieden": 4,
          "niederlagen": 13,
          "letzte5": "UNSNS"
        },
        {
          "platz": 13,
          "wappen": "https://upload.wikimedia.org/wikipedia/en/thumb/5/53/FC_Cologne_logo.svg/1200px-FC_Cologne_logo.svg.png",
          "team": "1. FC Köln",
          "spiele": 25,
          "punkte": 27,
          "tore": 33,
          "gegentore": 44,
          "tordifferenz": -11,
          "siege": 6,
          "unentschieden": 9,
          "niederlagen": 10,
          "letzte5": "NNUNN"
        },
        {
          "platz": 14,
          "wappen": "https://i.imgur.com/5jy3Gfr.png",
          "team": "VfL Bochum",
          "spiele": 25,
          "punkte": 25,
          "tore": 27,
          "gegentore": 56,
          "tordifferenz": -29,
          "siege": 8,
          "unentschieden": 1,
          "niederlagen": 16,
          "letzte5": "SSNNN"
        },
        {
          "platz": 15,
          "wappen": "https://i.imgur.com/gF0PfEl.png",
          "team": "TSG 1899 Hoffenheim",
          "spiele": 25,
          "punkte": 22,
          "tore": 33,
          "gegentore": 45,
          "tordifferenz": -12,
          "siege": 6,
          "unentschieden": 4,
          "niederlagen": 15,
          "letzte5": "SNNNN"
        },
        {
          "platz": 16,
          "wappen": "https://i.imgur.com/apFwbYZ.png",
          "team": "Hertha BSC",
          "spiele": 25,
          "punkte": 21,
          "tore": 30,
          "gegentore": 48,
          "tordifferenz": -18,
          "siege": 5,
          "unentschieden": 6,
          "niederlagen": 14,
          "letzte5": "NUNSN"
        },
        {
          "platz": 17,
          "wappen": "https://upload.wikimedia.org/wikipedia/commons/9/97/FC_Schalke_04_Logo.png",
          "team": "FC Schalke 04",
          "spiele": 25,
          "punkte": 21,
          "tore": 21,
          "gegentore": 45,
          "tordifferenz": -24,
          "siege": 4,
          "unentschieden": 9,
          "niederlagen": 12,
          "letzte5": "UUSSU"
        },
        {
          "platz": 18,
          "wappen": "https://i.imgur.com/v0tkpNx.png",
          "team": "VfB Stuttgart",
          "spiele": 25,
          "punkte": 20,
          "tore": 29,
          "gegentore": 42,
          "tordifferenz": -13,
          "siege": 4,
          "unentschieden": 8,
          "niederlagen": 13,
          "letzte5": "NUNNS"
        }
      ])
    );
  }

  getTableFromServer(url = ''): Observable<Team[]> {
    return this.httpClient.get(url + '/tabelle/bl1/2023')
      .pipe(map(table => this.transformToUIModel(table as TeamBackend[])));
  }

  transformToUIModel(teamBackend: TeamBackend[]): Team[] {
    const table: Team[] = [];
    teamBackend.forEach(t => table.push(this.transformBackendTeam(t)));
    return table;
  }

  private transformBackendTeam(teamBackend: TeamBackend): Team {
    const team: Team = {
      platz: teamBackend.platz,
      wappen: teamBackend.wappen,
      team: teamBackend.team,
      spiele: teamBackend.spiele,
      punkte: teamBackend.punkte,
      tore: teamBackend.tore,
      gegentore: teamBackend.gegentore,
      tordifferenz: teamBackend.tordifferenz,
      siege: teamBackend.siege,
      unentschieden: teamBackend.unentschieden,
      niederlagen: teamBackend.niederlagen,
      letzte5: []
    }

    teamBackend.letzte5.split('').forEach(char => {
      switch (char) {
        case 'S':
          team.letzte5.push('../../assets/sieg.svg');
          break;
        case 'U':
          team.letzte5.push('../../assets/unentschieden.svg');
          break;
        case 'N':
          team.letzte5.push('../../assets/niederlage.svg');
          break;
        default:
          break;
      }
    });

    return team;
  }
}
