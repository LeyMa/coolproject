import {Observable, BehaviorSubject} from "rxjs/Rx";
import {Http, Headers} from "@angular/http";
import {Injectable} from "@angular/core";
/**
 * Created by leyla.markosyan on 11/7/2016.
 */
@Injectable()
export class AuthenticationAuthorizationService {

    public redirectUrl: string ='';
    private logged: boolean = false;

    private isLogged: BehaviorSubject<boolean>;

    constructor(private http: Http) {
        this.logged = !!localStorage.getItem("auth");
        this.isLogged = new BehaviorSubject(this.logged);
    }

    public login(email: string, password: string): Observable<boolean> {
        if (email === 'admin' && password === 'admin') {
            console.log(email === 'admin');
            localStorage.setItem("auth", 'admin');
            this.isLogged.next(true);
        }
        return this.isLogged.map(log => log);
        //
        //
        // let headers = new Headers();
        // headers.append("Content-Type", "application/json")
        //
        // return this.http
        //     .post('/login-page',
        //           JSON.stringify({ email, password }),
        //           { headers }
        //     )
        //     .map(res => res.json())
        //     .map((res) => {
        //         if (res.success) {
        //             localStorage.setItem("auth", res.auth);
        //             this.logged = true;
        //         }
        //
        //         return res.success;
        //     });
    }

    public logout(): Observable<boolean> {
        localStorage.removeItem("auth");
        this.isLogged.next(false);

        return this.isLogged.map(log => log);
    }

    public isLoggedIn(): Observable<boolean> {
        return this.isLogged.map(log => log);
    }

    public storeOnLocalStorage(userIdentifier: string) : void {
        localStorage.setItem("Identifier",userIdentifier);
    }
}