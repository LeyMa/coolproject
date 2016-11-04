import {Routes, RouterModule} from "@angular/router";
import {PanelsAndWellsComponent} from "./panels-and-wells.component";
import {ModuleWithProviders} from "@angular/core";
/**
 * Created by leyla.markosyan on 11/4/2016.
 */
const routes: Routes = [
    {path: '', component: PanelsAndWellsComponent}
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);