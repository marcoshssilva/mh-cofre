import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'password-check',
    loadChildren: () => import('./pages/password-check/password-check.module').then( m => m.PasswordCheckPageModule)
  },
  {
    path: 'password-generator',
    loadChildren: () => import('./pages/password-generator/password-generator.module').then( m => m.PasswordGeneratorPageModule)
  },
  {
    path: 'all-entries',
    loadChildren: () => import('./pages/all-entries/all-entries.module').then( m => m.AllEntriesPageModule)
  },
  {
    path: 'emails',
    loadChildren: () => import('./pages/emails/emails.module').then( m => m.EmailsPageModule)
  },
  {
    path: 'social-media',
    loadChildren: () => import('./pages/social-media/social-media.module').then( m => m.SocialMediaPageModule)
  },
  {
    path: 'websites',
    loadChildren: () => import('./pages/websites/websites.module').then( m => m.WebsitesPageModule)
  },
  {
    path: 'applications',
    loadChildren: () => import('./pages/applications/applications.module').then( m => m.ApplicationsPageModule)
  },
  {
    path: 'bank-cards',
    loadChildren: () => import('./pages/bank-cards/bank-cards.module').then( m => m.BankCardsPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
