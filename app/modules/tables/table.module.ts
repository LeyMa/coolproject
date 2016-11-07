/**
 * Created by leyla.markosyan on 11/4/2016.
 */
import {NgModule} from "@angular/core";
import {TableComponent} from "./table.component";
import {routing} from "./table.routing";
@NgModule({
    imports: [routing],
    declarations: [TableComponent]
})
export class TableModule {}