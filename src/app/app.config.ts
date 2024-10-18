import { ApplicationConfig } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { NG_EVENT_PLUGINS } from '@tinkoff/ng-event-plugins';

import { I18NCommonService } from '@dpa/ui-common/services';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimations(),
    provideRouter(routes),
    NG_EVENT_PLUGINS,
    I18NCommonService,
  ]
};
