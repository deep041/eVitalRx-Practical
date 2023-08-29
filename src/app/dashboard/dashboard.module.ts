import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { CommonComponentsModule } from '../common/common.module';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ViewPatientComponent } from './view-patient/view-patient.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { AddFamilyMemberComponent } from './add-family-member/add-family-member.component';
import { MatNativeDateModule } from '@angular/material/core';




@NgModule({
    declarations: [
        DashboardComponent,
        AddPatientComponent,
        ViewPatientComponent,
        AddFamilyMemberComponent
    ],
    imports: [
        CommonModule,
        DashboardRoutingModule,
        CommonComponentsModule,
        MatIconModule,
        MatButtonModule,
        MatTableModule,
        MatDialogModule,
        FormsModule,
        ReactiveFormsModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatInputModule,
        MatNativeDateModule,
        MatSelectModule,
        MatDividerModule,
        MatListModule,
        MatProgressSpinnerModule,
        MatSnackBarModule,
        MatAutocompleteModule
    ]
})
export class DashboardModule { }
