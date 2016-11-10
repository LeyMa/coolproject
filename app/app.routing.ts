import {Routes, RouterModule} from "@angular/router";
import {DashboardComponent} from "./modules/dashboard/dashboard.component";
import {LoginGuard} from "./login-guard";
import {LoginPageComponent} from "./modules/login-page/login-page.component";
import {TimelineComponent} from "./modules/timeline/timeline.component";
const routes: Routes = [
    {path: '', component: DashboardComponent},
    {path: 'login-page', component: LoginPageComponent},
    {
        path: '',
        component: DashboardComponent,
        children: [
            {
                    path: 'float-charts',
                    loadChildren: 'app/modules/float-charts/float-charts.module#FloatChartsModule',
                    canActivate: [LoginGuard]
            },
            {
                    path: 'morris-charts',
                    loadChildren: 'app/modules/morris-charts/morris-charts.module#MorrisChartsModule',
                    canActivate: [LoginGuard]
            },
            {
                    path: 'timeline',
                    component: TimelineComponent,
                    canActivate: [LoginGuard]
            },
            {
                    path: 'table',
                    loadChildren: 'app/modules/tables/table.module#TableModule',
                    canActivate: [LoginGuard]
            },
            {
                    path: 'forms',
                    loadChildren: 'app/modules/forms/forms.module#FormsModule',
                    canActivate: [LoginGuard]
            },
            {
                    path: 'panels-and-wells',
                    loadChildren: 'app/modules/panels-and-wells/panels-and-wells.module#PanelsAndWellsModule',
                    canActivate: [LoginGuard]
            },
            {
                    path: 'buttons',
                    loadChildren: 'app/modules/buttons/buttons.module#ButtonsModule',
                    canActivate: [LoginGuard]
            },
            {
                    path: 'typography',
                    loadChildren: 'app/modules/typography/typography.module#TypographyModule',
                    canActivate: [LoginGuard]
            },
            {
                    path: 'grid',
                    loadChildren: 'app/modules/grid/grid.module#GridModule',
                    canActivate: [LoginGuard]
            },
            {
                    path: 'blank-page',
                    loadChildren: 'app/modules/blank-page/blank-page.module#BlankPageModule',
                    canActivate: [LoginGuard]
            },
            {
                    path: 'login-page',
                    loadChildren: 'app/modules/login-page/login-page.module#LoginPageModule',
                    canActivate: [LoginGuard]
            }
        ]
    }
];

const appRoutes: Routes = [
    ...routes
];

export const routing = RouterModule.forRoot(appRoutes);