import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AthletesComponent } from './components/pages/athletes/athletes.component';
import { SingersComponent } from './components/pages/singers/singers.component';
import { TemplateDemoComponent } from './components/pages/template-demo/template-demo.component';

const routes: Routes = [
    { path: 'cantantes', component: SingersComponent },
    { path: 'deportistas', component: AthletesComponent },
    { path: 'template-demo', component: TemplateDemoComponent },
    { path: '**', component: SingersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
