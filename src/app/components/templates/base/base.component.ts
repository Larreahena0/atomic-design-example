import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-base',
    templateUrl: './base.component.html',
    styleUrls: ['./base.component.scss'],
})
export class BaseComponent implements OnInit {
    @Input() title: string = '';
    @Input() gridItems: Array<any> = [];
    @Input() menuItems: Array<any> = [];

    constructor() {}

    ngOnInit(): void {}
}
