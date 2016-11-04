import {Routes, RouterModule} from "@angular/router";
import {DashboardComponent} from "./modules/dashboard/dashboard.component";
const routes: Routes = [
    {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'float-charts', loadChildren: 'app/modules/float-charts/float-charts.module#FloatChartsModule'}
];

const appRoutes: Routes = [
    ...routes
];

export const routing = RouterModule.forRoot(appRoutes);