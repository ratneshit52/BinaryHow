import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ParticlesModule } from 'angular-particle';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SectionMainComponent } from './section-main/section-main.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { FooterComponent } from './footer/footer.component';
import { PopularSearchComponent } from './popular-search/popular-search.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SearchDetailComponent } from './search-detail/search-detail.component';
import { SerachDetailLeftComponent } from './search-detail/serach-detail-left/serach-detail-left.component';
import { SerachDetailRightComponent } from './search-detail/serach-detail-right/serach-detail-right.component';
import { FilterPipePipe } from './filter-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SectionMainComponent,
    SearchBoxComponent,
    FooterComponent,
    PopularSearchComponent,
    HomeComponent,
    AboutComponent,
    SearchDetailComponent,
    SerachDetailLeftComponent,
    SerachDetailRightComponent,
    FilterPipePipe
  ],
  imports: [
    BrowserModule,
    ParticlesModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
