import {Routes, RouterModule} from "@angular/router";
import {FormsComponent} from "./forms.component";
import {ModuleWithProviders} from "@angular/core";
/**
 * Created by leyla.markosyan on 11/4/2016.
 */
const routes: Routes = [
    {path: '', component: FormsComponent}
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);