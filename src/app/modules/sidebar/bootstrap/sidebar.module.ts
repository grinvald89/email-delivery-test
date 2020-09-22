import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { SidebarComponent } from '../ui/sidebar.component';
import { MenuComponent } from '../ui/menu/menu.component';
import { SubMenuComponent } from '../ui/sub-menu/sub-menu.component';
import { RouterModule } from '@angular/router';

/**
 * Модуль для отображения бокового меню
 */
@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([]),
        MatButtonModule,
        MatIconModule
    ],
    declarations: [
        SidebarComponent,
        MenuComponent,
        SubMenuComponent
    ],
    exports: [
        SidebarComponent
    ]
})
export class SidebarModule { }
