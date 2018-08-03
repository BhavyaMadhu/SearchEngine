import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BusyModule } from 'angular2-busy';
import { SummaryComponent } from './summary/summary.component';
import { FacultyComponent } from './faculty/faculty.component';
import { TopicsComponent } from './topics/topics.component';
import { ResearchComponent } from './research/research.component';
import { NewsComponent } from './news/news.component';
import { EventsComponent } from './events/events.component';
import { SchoolsDepartmentsComponent } from './schools-departments/schools-departments.component';
import { CoursesComponent } from './courses/courses.component';
import { CardComponent } from '../common/components/card/card.component';
import { TuftsRoute } from './tufts.routing';
import { TuftsComponent } from './tufts.component';
import { SummaryFacultyComponent } from './summary/summary-faculty/summary-faculty.component';
import { SummaryTopicsComponent } from './summary/summary-topics/summary-topics.component';
import { CCoursesComponent } from './common/c-courses/c-courses.component';
import { CTopicsComponent } from './common/c-topics/c-topics.component';
import { CResearchComponent } from './common/c-research/c-research.component';
import { CFacultyComponent } from './common/c-faculty/c-faculty.component';
import { CNewsComponent } from './common/c-news/c-news.component';
import { CEventsComponent } from './common/c-events/c-events.component';
import { CWorldMapComponent } from './common/c-world-map/c-world-map.component';
import { CFiltersComponent } from './common/c-filters/c-filters.component';
import { CInfoCardComponent } from './common/c-info-card/c-info-card.component';
import { CChartsComponent } from './common/c-charts/c-charts.component';
import { SummaryDeptSchoolsComponent } from './summary/summary-dept-schools/summary-dept-schools.component';
import { StreamFiltersModule } from '../stream-filters/stream-filters.module';
//import { StreamMapComponent } from '../common/components/stream-map/stream-map.component';
import { SideNavComponent } from '../side-nav/side-nav.component';

@NgModule({
  declarations: [
    TuftsComponent,
    SummaryComponent,
    FacultyComponent,
    CardComponent,
    TopicsComponent,
    ResearchComponent,
    NewsComponent,
    EventsComponent,
    SchoolsDepartmentsComponent,
    CoursesComponent,
    SummaryFacultyComponent,
    SummaryTopicsComponent,
    CCoursesComponent,
    CTopicsComponent,
    CResearchComponent,
    CFacultyComponent,
    CNewsComponent,
    CEventsComponent,
    CWorldMapComponent,
    CFiltersComponent,
    CInfoCardComponent,
    CChartsComponent,
    SummaryDeptSchoolsComponent,
    //StreamMapComponent,
    SideNavComponent,
  ],
  imports: [
    RouterModule,
    CommonModule,
    HttpModule,
    BrowserAnimationsModule,
    ChartsModule,
    BusyModule,
    TuftsRoute,
    StreamFiltersModule,
  ],
})
export class TuftsModule {}
