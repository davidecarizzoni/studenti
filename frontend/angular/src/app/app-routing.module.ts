import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo:'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./Features/home/home.module').then(m => m.HomeModule) },
 { path: 'nav', loadChildren: () => import('./Features/nav/nav.module').then(m => m.NavModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
