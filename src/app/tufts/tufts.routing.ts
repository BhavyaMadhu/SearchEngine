import { RouterModule, Routes } from '@angular/router';
import { SummaryComponent } from "./summary/summary.component";
import { FacultyComponent } from "./faculty/faculty.component";
import { TopicsComponent } from "./topics/topics.component";
import { ResearchComponent } from "./research/research.component";
import { NewsComponent } from "./news/news.component";
import { EventsComponent } from "./events/events.component";
import { SchoolsDepartmentsComponent } from "./schools-departments/schools-departments.component";
import { CoursesComponent } from "./courses/courses.component";
import { TuftsComponent } from "./tufts.component";

const tuftRoutes: Routes = [
    {
        path: 'tufts', component: TuftsComponent,
        children: [
            { path: 'summary', component: SummaryComponent },
            { path: 'topics', component: TopicsComponent },
            { path: 'research', component: ResearchComponent },
            { path: 'news', component: NewsComponent },
            { path: 'events', component: EventsComponent },
            { path: 'schools-departments', component: SchoolsDepartmentsComponent },
            { path: 'courses', component: CoursesComponent },
            { path: 'faculty', component: FacultyComponent },
            { path: '', redirectTo: '/summary', pathMatch: 'full' }
        ]
    }

];
export const TuftsRoute = RouterModule.forChild(tuftRoutes);