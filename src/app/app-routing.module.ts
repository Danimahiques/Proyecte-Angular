import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListPlayersComponent } from './players/list-players/list-players.component';
import { BodyInicioComponent } from './proyecto/proyecto/body-inicio/body-inicio.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormComponent } from './formulari/reactive-form/reactive-form.component';
import { AuthGuard } from './user/auth.guard';

const routes: Routes = [
  {path: "players", component: ListPlayersComponent},
  {path: "body", component: BodyInicioComponent},
  {path: "login", component: LoginComponent},
  {path: "player/:name", component: LoginComponent},
  {path: "inscripcion", canActivate:[AuthGuard],component: ReactiveFormComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'body'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
