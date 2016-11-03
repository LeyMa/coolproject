/**
 * Created by leyla.markosyan on 11/3/2016.
 */
import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {BrowserModule} from "@angular/platform-browser";
import {routing} from "./app.routing";
@NgModule({
    imports: [BrowserModule,routing],
    declarations: [AppComponent],

    bootstrap: [AppComponent]
})
export class AppModule {}