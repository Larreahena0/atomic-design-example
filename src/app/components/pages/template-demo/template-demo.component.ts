import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-template-demo',
    templateUrl: './template-demo.component.html',
    styleUrls: ['./template-demo.component.scss'],
})
export class TemplateDemoComponent implements OnInit {
    gridItems: Array<any> = [];

    constructor() {
        this.gridItems = [
            {
                imageText: 'Nombre del personaje'
            },
            {
                imageText: 'Nombre del personaje'
            },
            {
                imageText: 'Nombre del personaje'
            },
            {
                imageText: 'Nombre del personaje'
            },
            {
                imageText: 'Nombre del personaje'
            },
            {
                imageText: 'Nombre del personaje'
            },
        ];
    }

    ngOnInit(): void {}
}
