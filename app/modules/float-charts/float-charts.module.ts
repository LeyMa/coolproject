/**
 * Created by leyla.markosyan on 11/3/2016.
 */
import {NgModule} from "@angular/core";
import {FloatChartsComponent} from "./float-charts.component";
import {routing} from "./float-charts.routing";
@NgModule({
    imports: [routing],
    declarations: [FloatChartsComponent]
})
export class FloatChartsModule {}