/**
 * Created by leyla.markosyan on 11/4/2016.
 */
import {NgModule} from "@angular/core";
import {routing} from "./login-page.routing";
import {LoginPageComponent} from "./login-page.component";
@NgModule({
    imports: [routing],
    declarations: [LoginPageComponent]
})
export class LoginPageModule {}