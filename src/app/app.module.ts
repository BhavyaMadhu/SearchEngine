import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { AppRoute } from './app.routing';

import { CommonService } from './common/services/common.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { CardComponent } from './common/components/card/card.component';
import { NavComponent } from './common/nav/nav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TuftsModule } from './tufts/tufts.module';
import { FooterComponent } from './common/footer/footer.component';
import { StreamFiltersModule } from './stream-filters/stream-filters.module';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers } from './reducers';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeaderComponent,
    DashboardComponent,
    FooterComponent,
  ],
  imports: [
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    HttpModule,
    HttpClientModule,
    ChartsModule,
    NgbModule.forRoot(),
    AppRoute,
    TuftsModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
    }),
    StreamFiltersModule,
  ],
  exports: [StreamFiltersModule],
  providers: [CommonService],
  bootstrap: [AppComponent],
})
export class AppModule {}
