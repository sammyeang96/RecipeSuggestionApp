import { OnInit } from '@angular/core';
import { ScrollSpyService } from './service';
export declare class ScrollSpyDirective implements OnInit {
    private scrollSpy;
    private scrollStream$;
    constructor(scrollSpy: ScrollSpyService);
    ngOnInit(): void;
    onScroll($event: any): void;
}
