import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './proyecto/proyecto/header/header.component';
import { BodyInicioComponent } from './proyecto/proyecto/body-inicio/body-inicio.component';
import {ListPlayersComponent} from './players/list-players/list-players.component';
import { LoginComponent } from './login/login.component';

import { PlayersService } from './players/players.service';
import { from } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ListPlayersCardsComponent } from './players/list-players/list-players-cards/list-players-cards.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterNamePipe } from './players/list-players/filter-name.pipe';
import { ListPlayersItemComponent } from './players/list-players/list-players-item/list-players-item.component';
import { ListPlayerDetailsComponent } from './players/list-players/list-player-details/list-player-details.component';
import { CommonModule, DatePipe } from '@angular/common';
import { ReactiveFormComponent } from './formulari/reactive-form/reactive-form.component';
import { DetailsDirective } from './directives/details.directive';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyInicioComponent,
    LoginComponent,
    ListPlayersComponent,
    ListPlayersCardsComponent,
    FilterNamePipe,
    ListPlayersItemComponent,
    ListPlayerDetailsComponent,
    ReactiveFormComponent,
    DetailsDirective,
   
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
    
  ],
  providers: [PlayersService, FilterNamePipe],
  bootstrap: [AppComponent]
 
})
export class AppModule { }
