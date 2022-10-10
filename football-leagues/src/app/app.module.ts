import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { CoreModule } from './core/core.module';
import { LeaguesModule } from './modules/leagues/leagues.module';
import { TeamsModule } from './modules/teams/teams.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    HttpClientModule,
    CoreModule,
    LeaguesModule,
    TeamsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
