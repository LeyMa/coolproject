import {NgModule} from "@angular/core";
import {routing} from "./forms.routing";
import {FormsComponent} from "./forms.component";
/**
 * Created by leyla.markosyan on 11/4/2016.
 */
@NgModule({
    imports: [routing],
    declarations: [FormsComponent]
})
export class FormsModule {}