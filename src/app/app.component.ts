import { ChangeDetectionStrategy, Component } from '@angular/core';

/**
 * Компонент для отображения главной страницы
 */
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent { }
