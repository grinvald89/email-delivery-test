import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/email-deliveries',
        pathMatch: 'full'
    },
    {
        path: 'email-deliveries',
        loadChildren: () => import('./pages/email-deliveries/bootstrap/email-deliveries.module').then(m => m.EmailDeliveriesModule)
    }
];

/**
 * Модуль для роутинга главной страницы
 */
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
