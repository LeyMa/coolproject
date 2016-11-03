import {Routes, RouterModule} from "@angular/router";
import {PageWrapperComponent} from "./components/page-wrapper.component";
import {AppComponent} from "./app.component";
const routes: Routes = [
    {path: '',component:AppComponent},
    // {path: 'wrapper', component: PageWrapperComponent}
];

const appRoutes: Routes = [
    ...routes
];

export const routing = RouterModule.forRoot(appRoutes);