import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SentEmailDeliveriesComponent } from '../ui/sent-email-deliveries/sent-email-deliveries.component';
import { DraftEmailDeliveriesComponent } from '../ui/draft-email-deliveries/draft-email-deliveries.component';
import { EmailDeliveryComponent } from '../ui/email-delivery/email-delivery.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'sent',
        pathMatch: 'full'
    },
    {
        path: 'sent',
        component: SentEmailDeliveriesComponent
    },
    {
        path: 'draft',
        component: DraftEmailDeliveriesComponent
    },
    {
        path: ':emailDeliveryId',
        component: EmailDeliveryComponent
    }
];

/**
 * Модуль для роутинга страницы Email-рассылок
 */
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EmailDeliveriesRoutingModule { }
