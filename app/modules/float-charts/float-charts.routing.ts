import {Routes, RouterModule} from "@angular/router";
import {FloatChartsComponent} from "./float-charts.component";
import {ModuleWithProviders} from "@angular/core";
/**
 * Created by leyla.markosyan on 11/3/2016.
 */
const routes: Routes = [
    {path: '', component: FloatChartsComponent}
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);