import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MhTranslateHelperService } from 'src/app/core/services/mh-translate-helper.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  constructor(
    private translate: TranslateService,
    private translateHelperService: MhTranslateHelperService
  ) {}

  async ngOnInit() {
    this.translateHelperService.setupTranslateService(this.translate);
  }
}
