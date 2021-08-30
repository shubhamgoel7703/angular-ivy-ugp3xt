import {
  Component,
  EventEmitter,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  maleStatus = true;
  femaleStatus = true;
  inputQuery = '';
  @Output('queryChangeEvent')
  queryChangeEvent = new EventEmitter();
  constructor() {}

  queryChange() {
    this.queryChangeEvent.emit({
      maleStatus: this.maleStatus,
      femaleStatus: this.femaleStatus,
      inputQuery: this.inputQuery
    });
  }

  ngOnInit() {}
}
