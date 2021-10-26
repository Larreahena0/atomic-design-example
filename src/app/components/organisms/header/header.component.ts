import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
    menuItems: Array<any> = [];

    constructor() {
        this.menuItems = [
            {
                optionText: 'Cantantes',
                optionHref: '/cantantes',
            },
            {
                optionText: 'Deportistas',
                optionHref: '/deportistas',
            },
            {
                optionText: 'Actores',
                optionHref: '/actores',
            },
            {
                optionText: 'Líderes sociales',
                optionHref: '/lideres-sociales',
            },
            {
                optionText: 'Politicos'
            }
        ];
    }

    ngOnInit(): void {}
}
