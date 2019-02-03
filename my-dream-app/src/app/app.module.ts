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
    BadgeComponent
 ],
  imports: [
    BrowserModule,
    AppRoutingModule
 ],
  providers: [ConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
