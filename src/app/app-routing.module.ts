import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from 'src/app/modules/normal/components/landing-page/landing-page.component'


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '',
    component: LandingPageComponent,
    children: [
      {
        path: '',
        loadChildren:
          './modules/normal/normal.module#NormalModule'
      }
    ],
    // canActivate: [NoAuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
