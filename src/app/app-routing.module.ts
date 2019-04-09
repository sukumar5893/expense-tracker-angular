import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginDialogComponent } from './login-dialog/login-dialog.component';
import { ShowcaseComponent } from './showcase/showcase.component';

const routes: Routes = [
  {
    path: '',
    component: ShowcaseComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
