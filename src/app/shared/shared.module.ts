import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { MhToolbarPrincipalComponent } from './components/mh-toolbar-principal/mh-toolbar-principal.component';
import { CoreModule } from '../core/core.module';
import { MhMenuPrincipalComponent } from './components/mh-menu-principal/mh-menu-principal.component';

@NgModule({
  declarations: [
    MhToolbarPrincipalComponent,
    MhMenuPrincipalComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    CoreModule
  ],
  exports: [
    CoreModule,
    IonicModule,
    MhToolbarPrincipalComponent,
    MhMenuPrincipalComponent
  ],
})
export class SharedModule {}
