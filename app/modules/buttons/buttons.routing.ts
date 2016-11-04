import {Routes, RouterModule} from "@angular/router";
import {ButtonsComponent} from "./buttons.component";
import {ModuleWithProviders} from "@angular/core";
/**
 * Created by leyla.markosyan on 11/4/2016.
 */
const routes: Routes = [
    {path: '', component: ButtonsComponent}
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);