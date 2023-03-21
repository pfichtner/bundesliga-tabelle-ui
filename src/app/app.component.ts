import {Component, Input} from '@angular/core';
import {BundesligaTableService} from "./services/bundesliga-table.service";
import {Team} from "./models/team.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {

  @Input() table: Team[] = [];
  constructor(private tableService: BundesligaTableService) {
    this.tableService.getTable().subscribe(result => {
      this.replaceLastFiveStringWithEmojis(result);
      this.table = result
    });
  }

  private replaceLastFiveStringWithEmojis(result: Team[]) {
    result.forEach(team => {
      team.letzte5 = team.letzte5
        .replaceAll('S', '✅')
        .replaceAll('U', '0️⃣')
        .replaceAll('N', '⛔️');
    });
  }
}
