import { Component, ChangeDetectionStrategy, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { skipWhile, takeUntil } from 'rxjs/operators';

/**
 * Компонент для отображения Email-рассылки
 */
@Component({
    selector: 'email-deliveries_email-delivery',
    templateUrl: './email-delivery.component.html',
    styleUrls: ['./email-delivery.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmailDeliveryComponent implements OnInit, OnDestroy {
    private destructor$ = new Subject<boolean>();

    /**
     * Выполнится после инициализации компонента
     */
    public ngOnInit(): void {

    }

    /**
     * Выполнится после уничтожения компонента
     */
    public ngOnDestroy(): void {
        this.destructor$.next(true);
        this.destructor$.complete();
    }
}
