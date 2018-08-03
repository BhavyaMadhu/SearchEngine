import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

const appRoutes: Routes = [
        {path: 'dashboard', component: DashboardComponent},
        {path: '', redirectTo: '/dashboard', pathMatch: 'full'}
     
];
export const AppRoute = RouterModule.forRoot( appRoutes, {useHash: true} );
