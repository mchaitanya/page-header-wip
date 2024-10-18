import { Component } from '@angular/core';
import { ClarityIcons, infoCircleIcon, bookmarkIcon, shareIcon, filterIcon } from '@cds/core/icon';
import { ClarityModule } from '@clr/angular';

ClarityIcons.addIcons(infoCircleIcon, bookmarkIcon, shareIcon, filterIcon);

/**
 * PageHeaderComponent
 * @export
 * @class PageHeaderComponent
 * @implements {OnChanges}
 * @implements {AfterViewInit}
 * @implements {OnDestroy}
 */
@Component({
  selector: 'app-page-header',
  templateUrl: 'page-header.component.html',
  styleUrls: ['page-header.component.scss'],
  standalone: true,
  imports: [ClarityModule],
})
export class PageHeaderComponent {}
