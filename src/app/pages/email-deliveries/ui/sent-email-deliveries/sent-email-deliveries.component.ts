import { Component, ChangeDetectionStrategy, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import * as moment from 'moment';

import { Channel } from '../../core/channel/channel';
import { EmailDelivery } from '../../core/email-delivery/email-delivery';

/**
 * Компонент для отображения отправленных Email-рассылок
 */
@Component({
    selector: 'email-deliveries_sent-email-deliveries',
    templateUrl: './sent-email-deliveries.component.html',
    styleUrls: ['./sent-email-deliveries.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SentEmailDeliveriesComponent implements OnInit, OnDestroy {
    private sentEmailDeliveries: EmailDelivery[] = [
        new EmailDelivery({
        id: 0,
        name: 'Отправленная рассылка',
        status: 'Активен',
        channel: new Channel({
            id: 0,
            name: 'Канал'
        }),
        sentCount: 0,
        showCount: 0,
        clickCount: 0,
        created: moment(moment.now()),
        agent: 'Агент'
    })];
    private destructor$ = new Subject<boolean>();

    get SentEmailDeliveries(): EmailDelivery[] {
        return this.sentEmailDeliveries;
    }
    set SentEmailDeliveries(value: EmailDelivery[]) {
        this.sentEmailDeliveries = value;
    }

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
