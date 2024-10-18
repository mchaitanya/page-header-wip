import { Component } from '@angular/core';
import { ClarityModule } from '@clr/angular';
import { ThemeToggleComponent, ThemeType } from '@dpa/ui-common/theme-toggle';

import { PageHeaderComponent } from './page-header/page-header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
  imports: [ClarityModule, ThemeToggleComponent, PageHeaderComponent],
})
export class AppComponent {
  public theme = ThemeType.LIGHT;

  public toggleVisionTheme(isEnabled: boolean) {
    if (isEnabled) {
      document.body.setAttribute('vsn-theme', '');
    } else {
      document.body.removeAttribute('vsn-theme');
    }
  }

  public onThemeChange(theme: ThemeType) {
    document.body.setAttribute('cds-theme', theme);
    this.theme = theme;
  }
}
