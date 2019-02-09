import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BootstrapPricingComponent } from './bootstrap-pricing/bootstrap-pricing.component';
import { PricingNavComponent } from './bootstrap-pricing/pricing-nav.component';
import { CardContainerComponent } from './bootstrap-pricing/card-container/card-container.component';
import { FooterContainerComponent } from './bootstrap-pricing/footer-container/footer-container.component';
import { PricingCardComponent } from './bootstrap-pricing/card-container/pricing-card.component';
import { IntroComponent } from './intro/intro.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContentComponent } from './content/content.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { PricingComponent } from './pricing/pricing.component';
import { FooterComponent } from './footer/footer.component';
import { ClientsComponent } from './clients/clients.component';
import { HeaderComponent } from './header/header.component';
import { SocialComponent } from './social/social.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AppRoutingModule } from './app-routing.module';
import { ConfigService } from './config.service';
import { BlogComponent } from './blog/blog.component';
import { PostComponent } from './post/post.component';
import { ArticleComponent } from './article/article.component';
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

@NgModule({
  declarations: [
    AppComponent,
    BootstrapPricingComponent,
    PricingNavComponent,
    CardContainerComponent,
    FooterContainerComponent,
    PricingCardComponent,
    IntroComponent,
    GalleryComponent,
    ContentComponent,
    TestimonialComponent,
    PricingComponent,
    FooterComponent,
    ClientsComponent,
    HeaderComponent,
    SocialComponent,
    NavigationComponent,
    BlogComponent,
    PostComponent,
    ArticleComponent,
    BadgeComponent,
    InterCompV1Component,
    ProgressComponent,
    EmojisComponent,
    LifecycleComponent,
    MyBootComponent,
    FormComponent
 ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgbModule,
    NgxDatatableModule,
 ],
  providers: [ConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
