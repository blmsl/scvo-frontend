import { Component } from '@angular/core';

import { ROUTER_DIRECTIVES } from '@angular/router';

import { MaterializeDirective } from "angular2-materialize";

@Component({
    selector: 'event-result',
    templateUrl: 'app/components/dynamic/search/events/elastic-result-detail.component.html',
    directives: [ROUTER_DIRECTIVES, MaterializeDirective]
})
export class EventResultComponent {

}