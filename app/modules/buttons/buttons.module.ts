/**
 * Created by leyla.markosyan on 11/4/2016.
 */
import {NgModule} from "@angular/core";
import {routing} from "./buttons.routing";
import {ButtonsComponent} from "./buttons.component";
@NgModule({
    imports: [routing],
    declarations: [ButtonsComponent]
})
export class ButtonsModule {}