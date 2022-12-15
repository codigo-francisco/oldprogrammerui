import { Route } from "@angular/router";

export const RootRoutes: Array<Route> = [
    {
        path: '**',
        redirectTo: 'authentication/login'
    }
];