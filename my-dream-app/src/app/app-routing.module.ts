import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntroComponent } from './intro/intro.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContentComponent } from './content/content.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { PricingComponent } from './pricing/pricing.component';
import { ClientsComponent } from './clients/clients.component';
import { HeaderComponent } from './header/header.component';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog/blog.component';
import { ArticleComponent } from './article/article.component';


const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full'},
  { path: 'Home', component: HeaderComponent},
  { path: 'About', component: IntroComponent},
  { path: 'Services', component: ContentComponent},
  { path: 'Testimonial', component: TestimonialComponent},
  { path: 'Gallery', component: GalleryComponent},
  { path: 'Clients', component: ClientsComponent},
  { path: 'Pricing', component: PricingComponent},
  { path: 'Blog', component: BlogComponent},
  { path: 'Article/:id', component: ArticleComponent},
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
    declarations: [],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }
