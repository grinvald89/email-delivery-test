import { Component, ChangeDetectionStrategy } from '@angular/core';

/**
 * Компонент для отображения меню
 */
@Component({
    selector: 'sidebar_menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuComponent { }
