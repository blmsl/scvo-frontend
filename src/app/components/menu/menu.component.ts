import { Component, Input, NgZone, Inject } from '@angular/core';
import { Subscription, Observable } from 'rxjs/Rx';
import { AppService, MenuElement } from '../../services/app.service';

// import { TranslatePipe } from '../pipes/translate.pipe';

@Component({
  selector: '[menu]',
  templateUrl: './menu.component.html'
})
export class MenuComponent {
    @Input('menu') menuName: string = null;

    constructor(private appService: AppService) {}

    public get menuItems(): MenuElement[] {
        if (this.appService.menus && this.appService.menus.hasOwnProperty(this.menuName)) {
            return this.appService.menus[this.menuName];
        } else {
            return [];
        }
    }
}