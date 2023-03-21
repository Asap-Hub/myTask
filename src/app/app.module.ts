import { FirstAppService } from './service/first-app.service';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { LikePageComponent } from './like-page/like-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    LikePageComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    FirstAppService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 


}
