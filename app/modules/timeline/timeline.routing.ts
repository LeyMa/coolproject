import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {TimelineComponent} from "./timeline.component";

/**
 * Created by leyla.markosyan on 11/4/2016.
 */
const routes: Routes = [
    {path: '', component: TimelineComponent}
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);