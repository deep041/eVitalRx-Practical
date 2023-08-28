import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { ViewPatientComponent } from './view-patient/view-patient.component';

const routes: Routes = [
    { path: '', component: DashboardComponent },
    { path: 'view', component: ViewPatientComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule { }
