import {Component, Input} from '@angular/core';
import {BundesligaTableService} from "./services/bundesliga-table.service";
import {Team} from "./models/team.ui.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {

  @Input() table: Team[] = [];
  constructor(private tableService: BundesligaTableService) {
    this.tableService.getTableFromServer().subscribe(result => {
      this.table = result
    });
  }
}
