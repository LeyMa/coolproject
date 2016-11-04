/**
 * Created by leyla.markosyan on 11/4/2016.
 */
import {NgModule} from "@angular/core";
import {routing} from "./panels-and-wells.routing";
import {PanelsAndWellsComponent} from "./panels-and-wells.component";
@NgModule({
    imports: [routing],
    declarations: [PanelsAndWellsComponent]
})
export class PanelsAndWellsModule {}