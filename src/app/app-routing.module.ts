import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InplayComponent } from './inplay/inplay.component';
import { TodayComponent } from './today/today.component';
import { TomorrowComponent } from './tomorrow/tomorrow.component';

const routes: Routes = [
  {path:'',redirectTo:'inplay',pathMatch:"full"},
  {path:'inplay',component:InplayComponent},
  {path:'today',component:TodayComponent},
  {path:'tomorrow',component:TomorrowComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
