import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Directive } from '@angular/core';

import { AppComponent } from './app.component';
import { BootstrapPricingComponent } from './bootstrap-pricing/bootstrap-pricing.component';
import { PricingNavComponent } from './bootstrap-pricing/pricing-nav.component';
import { CardContainerComponent } from './bootstrap-pricing/card-container/card-container.component';
import { FooterContainerComponent } from './bootstrap-pricing/footer-container/footer-container.component';
import { BadgeComponent } from './badge/badge.component';
import { InterCompV1Component } from './inter-comp-v1/inter-comp-v1.component';
import { ProgressComponent } from './progress/progress.component';
import { EmojisComponent } from './emojis/emojis.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { MyBootComponent } from './my-boot/my-boot.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FormComponent } from './form/form.component';
import { DirectivesComponent } from './directives/directives.component';
import { MagicDirective } from './directives/magic.directive';
import { InfoCardComponent } from './directives/info-card.component';
import { InputBoxDirective } from './directives/input-box.directive';
import { ZoomDirective } from './directives/zoom.directive';
import { OppIfDirective } from './directives/opp-if.directive';
import { ServicesComponent } from './services/services.component';
import { PricingCardComponent } from './bootstrap-pricing/card-container/pricing-card.component';
import { DataService } from './services/data.service';
import { AggrService } from './services/aggr.service';
import { SampleService } from './services/sample.service';
import { MyRouterModule } from './app.routing';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './first/second/second.component';
import { ForgotComponent } from './first/forgot/forgot.component';
import { ProfileComponent } from './first/second/profile.component';
import { PaymentComponent } from './first/second/payment.component';


@NgModule({
  declarations: [
    AppComponent,
    BootstrapPricingComponent,
    PricingNavComponent,
    CardContainerComponent,
    FooterContainerComponent,
    BadgeComponent,
    InterCompV1Component,
    ProgressComponent,
    EmojisComponent,
    LifecycleComponent,
    MyBootComponent,
    FormComponent,
    DirectivesComponent,
    MagicDirective,
    InfoCardComponent,
    InputBoxDirective,
    ZoomDirective,
    OppIfDirective,
    ServicesComponent,
    PricingCardComponent,
    FirstComponent,
    SecondComponent,
    ForgotComponent,
    ProfileComponent,
    PaymentComponent

 ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    NgxDatatableModule,
    MyRouterModule
 ],
  providers: [
    SampleService,
    DataService,
    AggrService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
