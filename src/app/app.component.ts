import { Component } from '@angular/core';
import { ClarityIcons, refreshIcon } from '@cds/core/icon';
import { ClarityModule } from '@clr/angular';
import { ThemeToggleComponent, ThemeType } from '@dpa/ui-common/theme-toggle';

ClarityIcons.addIcons(refreshIcon);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
  imports: [ClarityModule, ThemeToggleComponent],
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
