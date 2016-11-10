/**
 * Created by leyla.markosyan on 11/3/2016.
 */
import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {BrowserModule} from "@angular/platform-browser";
import {routing} from "./app.routing";
import {DashboardComponent} from "./modules/dashboard/dashboard.component";
import {AuthenticationAuthorizationService} from "./service/AuthenticationAuthorizationService";
import {LoginGuard} from "./login-guard";
import {HttpModule} from "@angular/http";
import {TimelineComponent} from "./modules/timeline/timeline.component";
import {LoginPageComponent} from "./modules/login-page/login-page.component";
@NgModule({
    imports: [BrowserModule,routing, HttpModule],
    declarations: [AppComponent, DashboardComponent, LoginPageComponent,TimelineComponent],

    providers: [AuthenticationAuthorizationService, LoginGuard],
    bootstrap: [AppComponent]
})
export class AppModule {}