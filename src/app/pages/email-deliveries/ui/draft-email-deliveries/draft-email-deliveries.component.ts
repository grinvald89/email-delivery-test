import { Component, ChangeDetectionStrategy, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import * as moment from 'moment';

import { Channel } from '../../core/channel/channel';
import { EmailDelivery } from '../../core/email-delivery/email-delivery';

/**
 * Компонент для отображения черновиков Email-рассылок
 */
@Component({
    selector: 'email-deliveries_draft-email-deliveries',
    templateUrl: './draft-email-deliveries.component.html',
    styleUrls: ['./draft-email-deliveries.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DraftEmailDeliveriesComponent implements OnInit, OnDestroy {
    private draftEmailDeliveries: EmailDelivery[] = [
        new EmailDelivery({
        id: 0,
        name: 'Черновая рассылка',
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

    get DraftEmailDeliveries(): EmailDelivery[] {
        return this.draftEmailDeliveries;
    }
    set DraftEmailDeliveries(value: EmailDelivery[]) {
        this.draftEmailDeliveries = value;
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
