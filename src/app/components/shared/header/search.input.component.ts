import { Component, Input, Output, ElementRef, EventEmitter } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import { Observable } from 'rxjs/Rx';

@Component({
    selector: 'input-debounce',
    templateUrl: 'app/components/shared/header/search.input.component.html'
})

export class InputDebounceComponent {
    @Input() placeholder: string;
    @Input() delay: number = 500;
    @Output() value: EventEmitter<any> = new EventEmitter();

    public inputValue: string;

    constructor(private elementRef: ElementRef) {
        const eventStream = Observable.fromEvent(elementRef.nativeElement, 'keyup')
        .map(() => this.inputValue)
        .debounceTime(this.delay)
        .distinctUntilChanged();

        eventStream.subscribe(input => this.value.emit(input));
    }
}