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
    this.getRandomString(1, 'bla bla bla');

  }
  /**
   @description adds new log
 * @paramTag {anyNumber} specify line number
 * @paramTag {anyString} specify string to print
 * @return  returns the arguments concatinated
 */
  getRandomString(anyNumber: number, anyString: string) {
    const newString = anyNumber.toString() + '---' + anyString;
    return  newString;
  }

  addNewLog() {
    const newLog = new Logger('3', 'line item 3');

    this.storeLoc.dispatch(new LoggerActions.AddLogger(newLog));
  }
  addManyNewLog() {
    const newLogCol = [
      new Logger('3', 'line item 3'),
      new Logger('3', 'line item 3')
    ];
    this.storeLoc.dispatch (new LoggerActions.AddLoggerCol(newLogCol));
    console.log(this.storeLoc.select('logger'));
  }

  updateLog(index: number) {
    const newLog = new Logger('10', 'line item 10');
    this.storeLoc.dispatch (new LoggerActions.UpdateLog({index: index, log: newLog}) );
  }
  deleteLog(index: number) {
    this.storeLoc.dispatch (new LoggerActions.DeleteLog(index));
  }
}
