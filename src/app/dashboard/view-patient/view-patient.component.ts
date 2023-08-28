import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { GetPatientResponse, Patient } from 'src/app/common/interfaces/patient.interface';
import { ApiService } from 'src/app/common/services/api/api.service';
import { AddFamilyMemberComponent } from '../add-family-member/add-family-member.component';
import { AddPatientComponent } from '../add-patient/add-patient.component';

@Component({
    selector: 'app-view-patient',
    templateUrl: './view-patient.component.html',
    styleUrls: ['./view-patient.component.css']
})
export class ViewPatientComponent implements OnInit {

    id: string = '';
    patientData!: Patient;

    constructor(private route: ActivatedRoute, private apiService: ApiService, public dialog: MatDialog) { }

    ngOnInit(): void {
        this.route.queryParams.subscribe(params => {
            this.id = params['id'];
            this.getPatient();
        });
    }

    getPatient(): void {
        this.apiService.getPatient({ patient_id: this.id }).subscribe((data: GetPatientResponse) => {
            if (data.status_code === '1') {
                this.patientData = data.data[0];
            }
        });
    }

    openDialog(id?: string) {
        this.dialog.open(AddFamilyMemberComponent, {
            data: {
                id: this.id
            },
        });
    }

}
