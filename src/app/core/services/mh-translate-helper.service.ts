import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class MhTranslateHelperService {

  public readonly defaultLanguage = 'pt-BR';
  constructor() {}

  public setLanguage(lang: string, translate: TranslateService) {
    translate.use(lang);
  }

  public setupTranslateService(translate: TranslateService) {
    translate.addLangs([this.defaultLanguage]);
    translate.setDefaultLang(this.defaultLanguage);

    translate.use(this.defaultLanguage);
  }
}
