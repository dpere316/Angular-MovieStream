import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './material';
import { AboutComponent } from './components/pages/about/about.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CardComponent } from './components/card/card.component';
import {HttpClientModule} from '@angular/common/http';
import { CardDetailComponent } from './components/card-detail/card-detail.component';
import { TvShowCardComponent } from './components/tv-show-card/tv-show-card.component';
import { FooterComponent } from './components/layout/footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    CardComponent,
    CardDetailComponent,
    TvShowCardComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
