import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { EmailDeliveriesRoutingModule } from './email-deliveries-routing.module';
import { SentEmailDeliveriesComponent } from '../ui/sent-email-deliveries/sent-email-deliveries.component';
import { DraftEmailDeliveriesComponent } from '../ui/draft-email-deliveries/draft-email-deliveries.component';
import { EmailDeliveryComponent } from '../ui/email-delivery/email-delivery.component';
import { TableEmailDeliveriesComponent } from '../ui/table-email-deliveries/table-email-deliveries.component';

/**
 * Модуль для отображения страницы Email-рассылок
 */
@NgModule({
    imports: [
        CommonModule,
        MatTableModule,
        MatCheckboxModule,
        EmailDeliveriesRoutingModule
    ],
    declarations: [
        SentEmailDeliveriesComponent,
        DraftEmailDeliveriesComponent,
        EmailDeliveryComponent,
        TableEmailDeliveriesComponent
    ]
})
export class EmailDeliveriesModule { }
