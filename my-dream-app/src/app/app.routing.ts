import { FirstComponent } from './first/first.component';
import { RouterModule, Routes } from '@angular/router';
import { SecondComponent } from './first/second/second.component';
import { ForgotComponent } from './first/forgot/forgot.component';
import { PaymentComponent } from './first/second/payment.component';
import { ProfileComponent } from './first/second/profile.component';
import { ForgotService } from './first/second/forgot.service';

const SECOND_ROUTES: Routes = [
    { path: 'profile', component : ProfileComponent },
    { path: 'payment', component : PaymentComponent }
];

const APP_ROUTES = [
    { path: '', component: FirstComponent },
    { path: 'second/:usNm', component: SecondComponent, children : SECOND_ROUTES },
    { path: 'forgot/:usNm', component: ForgotComponent, canActivate:[ForgotService] }
];

export const MyRouterModule = RouterModule.forRoot(APP_ROUTES);