import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { MhMessageHelperService } from 'src/app/core/services/mh-message-helper.service';

@Component({
  selector: 'app-mh-menu-principal',
  templateUrl: './mh-menu-principal.component.html',
  styleUrls: ['./mh-menu-principal.component.scss'],
})
export class MhMenuPrincipalComponent implements OnInit {

  contentID = 'main';
  menuID = 'mh-menu-principal';
  positionMenu = 'start';
  typeMenu = 'overlay';

  constructor(
    private menuController: MenuController,
    private messageHelper: MhMessageHelperService
  ) { }

  async ngOnInit() {}

  public closeMenu() {
    this.menuController.close(this.menuID);
  }

  public clickBtnSettings() {
    this.closeMenu();
    this.messageHelper.showDefaultMessageCannotUse();
  }

  public clickBtnLockApp() {
    this.closeMenu();
    this.messageHelper.showDefaultMessageCannotUse();
  }

  public clickBtnToggleDarkMode() {
    this.closeMenu();
    this.messageHelper.showDefaultMessageCannotUse();
  }
}
