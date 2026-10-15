import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigatingComponentsComponent } from './navigating-components/navigating-components.component';
import { IndianTvComediesComponent } from './navigating-components/indian-tv-comedies/indian-tv-comedies.component';
import { HttpClientModule } from '@angular/common/http';
import { ThrillerMoviesComponent } from './navigating-components/thriller-movies/thriller-movies.component';
import { TvActionAndAdventureComponent } from './navigating-components/tv-action-and-adventure/tv-action-and-adventure.component';
import { RelentlessCrimeDramasComponent } from './navigating-components/relentless-crime-dramas/relentless-crime-dramas.component';
import { YournextwatchComponent } from './navigating-components/yournextwatch/yournextwatch.component';
import { KdramasComponent } from './navigating-components/kdramas/kdramas.component';
import { MadeinindiaComponent } from './navigating-components/madeinindia/madeinindia.component';

@NgModule({
  declarations: [
    AppComponent,
    IndianTvComediesComponent,
    NavigatingComponentsComponent,
    ThrillerMoviesComponent,
    TvActionAndAdventureComponent,
    RelentlessCrimeDramasComponent,
    YournextwatchComponent,
    KdramasComponent,
    MadeinindiaComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
