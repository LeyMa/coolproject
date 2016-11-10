/**
 * Created by leyla.markosyan on 11/4/2016.
 */
import {Component} from "@angular/core";
import {AuthenticationAuthorizationService} from "../../service/AuthenticationAuthorizationService";
import {Router} from "@angular/router";
@Component({
    moduleId: module.id,
    templateUrl: 'login-page.component.html'
})
export class LoginPageComponent {
    constructor(private auth: AuthenticationAuthorizationService, private router: Router) {}

    login(event: Event, email: string, password: string) {
        event.preventDefault();
        this.auth
            .login(email, password)
            .subscribe((result) => {
                if (result) {
                    this.router.navigate([this.auth.redirectUrl]);
                }
                else{
                    console.log("Error: Login or password is incorrect.");
                }
            },
            error => console.log(error.message))
    }
}