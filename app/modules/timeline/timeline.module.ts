/**
 * Created by leyla.markosyan on 11/4/2016.
 */
import {NgModule} from "@angular/core";
import {routing} from "./timeline.routing";
import {TimelineComponent} from "./timeline.component";

@NgModule({
    imports: [routing],
    declarations: [TimelineComponent]
})
export class TimelineModule {}