import {Routes, RouterModule} from "@angular/router";
import {GridComponent} from "./grid.component";
import {ModuleWithProviders} from "@angular/core";
/**
 * Created by leyla.markosyan on 11/4/2016.
 */
const routes: Routes = [
    {path: '', component: GridComponent}
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);