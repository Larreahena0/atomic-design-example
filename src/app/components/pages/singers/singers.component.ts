import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-singers',
    templateUrl: './singers.component.html',
    styleUrls: ['./singers.component.scss'],
})
export class SingersComponent implements OnInit {
    gridItems: Array<any> = [];

    constructor() {
        this.gridItems = [
            {
                imageText: 'Diomedes Díaz',
                imageSrc: 'diomedes.jpg'
            },
            {
                imageText: 'Maluma',
                imageSrc: 'maluma.jpg'
            },
            {
                imageText: 'J Balvin',
                imageSrc: 'jbalvin.jpg'
            },
            {
                imageText: 'Alkolyrikoz',
                imageSrc: 'ninjaz.jpg'
            },
            {
                imageText: 'Noiseferatu',
                imageSrc: 'noiseferatu.jpg'
            },
            {
                imageText: 'Billie Eilish',
            },
            {
                imageText: 'Shakira'
            }
        ];
    }

    ngOnInit(): void {}
}
