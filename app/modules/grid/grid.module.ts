/**
 * Created by leyla.markosyan on 11/4/2016.
 */
import {NgModule} from "@angular/core";
import {GridComponent} from "./grid.component";
import {routing} from "./grid.routing";
@NgModule({
    imports: [routing],
    declarations: [GridComponent]
})
export class GridModule{}