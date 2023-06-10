import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule)
  },

  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'materi',
    loadChildren: () => import('./pages/materi/materi.module').then( m => m.MateriPageModule)
  },
  {
    path: 'tugas',
    loadChildren: () => import('./pages/tugas/tugas.module').then( m => m.TugasPageModule)
  },
  {
    path: 'formtugas/:nim',
    loadChildren: () => import('./pages/formtugas/formtugas.module').then( m => m.FormtugasPageModule)
  },
  {
    path: 'edit-profile',
    loadChildren: () => import('./pages/edit-profile/edit-profile.module').then( m => m.EditProfilePageModule)
  },




];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
