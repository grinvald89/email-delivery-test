import { Component, ChangeDetectionStrategy, OnInit, OnDestroy, Input } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { Subject } from 'rxjs';

import { EmailDelivery } from '../../core/email-delivery/email-delivery';

/**
 * Компонент для отображения таблицы Email-рассылок
 */
@Component({
    selector: 'email-deliveries_table-email-deliveries',
    templateUrl: './table-email-deliveries.component.html',
    styleUrls: ['./table-email-deliveries.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableEmailDeliveriesComponent implements OnInit, OnDestroy {
    private emailDeliveries: EmailDelivery[] = [];
    private selection: SelectionModel<EmailDelivery> = new SelectionModel<EmailDelivery>(true, []);
    private destructor$ = new Subject<boolean>();

    get DisplayedColumns(): string[] {
        return [
            'select',
            'name',
            'status',
            'sentCount',
            'showCount',
            'clickCount',
            'created',
            'agent',
            'actions'
        ];
    }

    @Input('EmailDeliveries')
    get EmailDeliveries(): EmailDelivery[] {
        return this.emailDeliveries;
    }
    set EmailDeliveries(value: EmailDelivery[]) {
        this.emailDeliveries = value;
    }

    get Selection(): SelectionModel<EmailDelivery> {
        return this.selection;
    }
    set Selection(value: SelectionModel<EmailDelivery>) {
        this.selection = value;
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

    /**
     * Соответствует ли количество выбранных элементов общему количеству строк
     */
    public isAllSelected(): boolean {
        const numSelected = this.selection.selected.length;
        const numRows = this.EmailDeliveries.length;
        return numSelected === numRows;
    }

    /**
     * Выбирает все строки, если они не все выделены; или очищает выбор
     */
    public masterToggle(): void {
        this.isAllSelected() ?
            this.Selection.clear() :
            this.EmailDeliveries.forEach(row => this.Selection.select(row));
    }

    /**
     * Открывает рассылку на редактирование
     * @param emailDelivery - Email-рассылка
     */
    public onEditEmailDelivery(emailDelivery: EmailDelivery): void {
        // Todo
        console.log(emailDelivery);
    }
}
