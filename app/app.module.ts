/**
 * Created by leyla.markosyan on 11/3/2016.
 */
import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {BrowserModule} from "@angular/platform-browser";
import {routing} from "./app.routing";
import {DashboardComponent} from "./modules/dashboard/dashboard.component";
import {FloatChartsComponent} from "./modules/float-charts/float-charts.component";
@NgModule({
    imports: [BrowserModule,routing],
    declarations: [AppComponent, DashboardComponent],

    bootstrap: [AppComponent]
})
export class AppModule {}