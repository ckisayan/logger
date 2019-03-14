import { Component, OnInit } from '@angular/core';
import { loggerReducer } from '../store/logger.reducers';
import { Store } from '@ngrx/store';
import { Logger } from '../store/logger.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  private loggerColState: Observable<{loggerCol: Logger[]}>;
  constructor(private store:
                        Store<{logger: {
                                        loggerCol: Logger[];
                                      };
                              }>
    ) { }

  ngOnInit() {
    console.log(this.store.select('logger'));
    this.loggerColState = this.store.select('logger');

  }

}
