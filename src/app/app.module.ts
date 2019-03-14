import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { loggerReducer } from './store/logger.reducers';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({logger: loggerReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
