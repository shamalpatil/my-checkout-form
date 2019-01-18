import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/Forms'

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { BootstrapPricingComponent } from './bootstrap-pricing/bootstrap-pricing.component';
import { PricingNavComponent } from './bootstrap-pricing/pricing-nav.component';
import { InfoComponent } from './bootstrap-pricing/info.component';
import { CardContainerComponent } from './bootstrap-pricing/card-container/card-container.component';
import { FooterContainerComponent } from './bootstrap-pricing/footer-container/footer-container.component';
import { PricingCardComponent } from './bootstrap-pricing/card-container/pricing-card.component';
import { ViewEncapsulationComponent } from './view-encapsulation/view-encapsulation.component';
import { NormalComponent } from './view-encapsulation/normal/normal.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { CalComponent } from './cal/cal.component';
import { MyInputComponent } from './cal/my-input/my-input.component';
import { OperatorComponent } from './cal/operator/operator.component';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    BootstrapPricingComponent,
    PricingNavComponent,
    InfoComponent,
    CardContainerComponent,
    FooterContainerComponent,
    PricingCardComponent,
    ViewEncapsulationComponent,
    NormalComponent,
    DatabindingComponent,
    CalComponent,
    MyInputComponent,
    OperatorComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
