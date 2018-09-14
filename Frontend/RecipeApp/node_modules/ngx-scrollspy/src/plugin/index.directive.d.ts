import { ElementRef, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { ScrollSpyIndexService } from './index.service';
export interface ScrollSpyIndexOptions {
    id?: string;
    selector?: string;
}
export declare class ScrollSpyIndexDirective implements OnInit, AfterViewInit, OnDestroy {
    private elRef;
    private scrollSpyIndex;
    options: ScrollSpyIndexOptions;
    defaultOptions: ScrollSpyIndexOptions;
    el: HTMLElement;
    constructor(elRef: ElementRef, scrollSpyIndex: ScrollSpyIndexService);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
}
