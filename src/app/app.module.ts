import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { CarouselModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { TodaysComponent } from './components/todays/todays.component';
import { IncomingComponent } from './components/incoming/incoming.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { MovieService } from './services/movie.service'
import { HttpModule } from '@angular/http';

const appRoutes: Routes = [
  { path: 'todays', component: TodaysComponent },
  { path: 'incoming', component: IncomingComponent },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TodaysComponent,
    IncomingComponent,
    PageNotFoundComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    HttpModule,
    BrowserModule,
    TooltipModule.forRoot(),
    CarouselModule.forRoot()
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
