import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { TestimonialCardComponent } from './shared/components/testimonial-card/testimonial-card.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { ModelNgContentModule } from './shared/components/modal-ng-content/model-ng-content.module';

@NgModule({
  declarations: [AppComponent, NavbarComponent, TestimonialCardComponent, FooterComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([], { initialNavigation: 'enabledBlocking' }),
    ModelNgContentModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
