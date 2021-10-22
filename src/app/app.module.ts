import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/molecules/card/card.component';
import { GridComponent } from './components/organisms/grid/grid.component';
import { HeaderComponent } from './components/organisms/header/header.component';
import { AthletesComponent } from './components/pages/athletes/athletes.component';
import { BaseComponent } from './components/templates/base/base.component';
import { MenuItemComponent } from './components/atoms/menu-item/menu-item.component';
import { MenuComponent } from './components/molecules/menu/menu.component';
import { SingersComponent } from './components/pages/singers/singers.component';
import { TemplateDemoComponent } from './components/pages/template-demo/template-demo.component';

@NgModule({
    declarations: [
        AppComponent,
        CardComponent,
        GridComponent,
        HeaderComponent,
        AthletesComponent,
        BaseComponent,
        MenuItemComponent,
        MenuComponent,
        SingersComponent,
        TemplateDemoComponent,
    ],
    imports: [BrowserModule, AppRoutingModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
