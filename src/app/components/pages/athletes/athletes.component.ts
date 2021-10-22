import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-athletes',
    templateUrl: './athletes.component.html',
    styleUrls: ['./athletes.component.scss'],
})
export class AthletesComponent implements OnInit {
    gridItems: Array<any> = [];

    constructor() {
        this.gridItems = [
            {
                imageText: 'James Rodríguez',
                imageSrc: 'james.jpg',
            },
            {
                imageText: 'Cristiano Ronaldo',
                imageSrc: 'cristiano.jpg',
            },
            {
                imageText: 'Radamel Falcao',
                imageSrc: 'falcao.jpg',
            },
            {
                imageText: 'Erling Haaland',
                imageSrc: 'haaland.jpg',
            },
            {
                imageText: 'Kylian Mbappé',
                imageSrc: 'mbappe.jpg',
            },
            {
                imageText: 'Lionel Messi',
                imageSrc: 'messi.jpg',
            },
        ];
    }

    ngOnInit(): void {}
}
