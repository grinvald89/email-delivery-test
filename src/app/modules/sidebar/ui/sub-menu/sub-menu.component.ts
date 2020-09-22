import { Component, ChangeDetectionStrategy, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

const SENT_URL: string = '/sent';
const DRAFT_URL: string = '/draft';

/**
 * Компонент для отображения вложенного меню
 */
@Component({
    selector: 'sidebar_sub-menu',
    templateUrl: './sub-menu.component.html',
    styleUrls: ['./sub-menu.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SubMenuComponent implements OnDestroy {
    private isEmailDeliverySectionActive: boolean = false;
    private destructor$ = new Subject<boolean>();

    constructor(
        private readonly route: Router,
        private readonly changeDetector: ChangeDetectorRef
    ) {
        route.events
            .pipe(
                takeUntil(this.destructor$)
            )
            .subscribe(params => {
                if (params instanceof NavigationEnd) {
                    this.IsEmailDeliverySectionActive = !params.url.endsWith(SENT_URL) && !params.url.endsWith(DRAFT_URL);
                }
            });
    }

    get IsEmailDeliverySectionActive(): boolean {
        return this.isEmailDeliverySectionActive;
    }
    set IsEmailDeliverySectionActive(value: boolean) {
        this.isEmailDeliverySectionActive = value;
        this.changeDetector.detectChanges();
    }

    /**
     * Выполнится после уничтожения компонента
     */
    public ngOnDestroy(): void {
        this.destructor$.next(true);
        this.destructor$.complete();
    }
}
