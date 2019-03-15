import { Component, OnInit } from '@angular/core';
import { loggerReducer } from '../store/logger.reducers';
import { Store } from '@ngrx/store';
import { Logger } from '../store/logger.model';
import { Observable } from 'rxjs';
import { store } from '@angular/core/src/render3/instructions';
import * as LoggerActions from '../store/logger.actions';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  private loggerColState: Observable<{loggerCol: Logger[]}>;
  constructor(private storeLoc:
                        Store<{logger: {
                                        loggerCol: Logger[];
                                      };
                              }>
    ) { }

  ngOnInit() {
    console.log(this.storeLoc.select('logger'));
    this.loggerColState = this.storeLoc.select('logger');

  }

  AddNewLog() {
    const newLog = new Logger('3', 'line item 3');

    this.storeLoc.dispatch(new LoggerActions.AddLogger(newLog));
  }

}
