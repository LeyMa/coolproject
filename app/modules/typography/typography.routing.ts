import {Routes, RouterModule} from "@angular/router";
import {TypographyComponent} from "./typography.component";
import {ModuleWithProviders} from "@angular/core";
/**
 * Created by leyla.markosyan on 11/4/2016.
 */
const routes: Routes = [
    {path: '', component: TypographyComponent}
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);