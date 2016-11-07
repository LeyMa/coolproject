import {Routes, RouterModule} from "@angular/router";
import {BlankPageComponent} from "./blank-page.component";
import {ModuleWithProviders} from "@angular/core";
/**
 * Created by leyla.markosyan on 11/4/2016.
 */
const routes: Routes = [
    {path: '', component: BlankPageComponent}
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);