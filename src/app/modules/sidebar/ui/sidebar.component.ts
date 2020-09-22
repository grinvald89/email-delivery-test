import { Component, ChangeDetectionStrategy } from '@angular/core';

/**
 * Компонент для отображения бокового меню
 */
@Component({
    selector: 'sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarComponent { }
