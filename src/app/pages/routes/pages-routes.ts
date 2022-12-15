import { Route } from "@angular/router";
import { BaseAuthenticationComponent } from "../authentication/base-authentication/base-authentication.component";
import { AuthenticationRoutes } from "../authentication/routes/authentication-routes";

export const PagesRoutes: Array<Route> = [
    {
        path: 'authentication',
        component: BaseAuthenticationComponent,
        children: AuthenticationRoutes
    }
];