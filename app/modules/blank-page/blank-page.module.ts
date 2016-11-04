/**
 * Created by leyla.markosyan on 11/4/2016.
 */
import {NgModule} from "@angular/core";
import {routing} from "./blank-page.routing";
import {BlankPageComponent} from "./blank-page.component";
@NgModule({
    imports: [routing],
    declarations: [BlankPageComponent]
})
export class BlankPageModule {}