import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/common/services/api/api.service';
import * as moment from 'moment';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddPatientResponse, GetPatientResponse, Patient } from 'src/app/common/interfaces/patient.interface';


@Component({
    selector: 'app-add-patient',
    templateUrl: './add-patient.component.html',
    styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent implements OnInit {

    addPatientForm!: FormGroup;
    patientData!: Patient

    constructor(public dialogRef: MatDialogRef<AddPatientComponent>, private apiService: ApiService, @Inject(MAT_DIALOG_DATA) public data: {id: string}) { }

    ngOnInit(): void {
        this.createForm();
        if (this.data.id) {
            this.addPatientForm.controls['last_name'].setValidators([Validators.required]);
            this.getPatient();
        }
    }

    createForm(): void {
        this.addPatientForm = new FormGroup({
            mobile: new FormControl('', [Validators.required, Validators.min(1000000000), Validators.max(9999999999)]),
            first_name: new FormControl('', [Validators.required]),
            last_name: new FormControl(''),
            zipcode: new FormControl(''),
            dob: new FormControl(''),
            gender: new FormControl(''),
            blood_group: new FormControl('')
        });
    }

    getPatient(): void {
        this.apiService.getPatient({ patient_id: this.data.id }).subscribe((data: GetPatientResponse) => {
            if (data.status_code === '1') {
                this.patientData = data.data[0];
                this.addPatientForm.patchValue({
                    mobile: this.patientData.mobile,
                    first_name: this.patientData.firstname,
                    last_name: this.patientData.lastname,
                    zipcode: this.patientData.zipcode
                })
            }
        });
    }

    addPatient(): void {
        let payload: any = { };

        if (this.addPatientForm.value.first_name) {
            payload.first_name = this.addPatientForm.value.first_name;
        }

        if (this.addPatientForm.value.last_name) {
            payload.last_name = this.addPatientForm.value.last_name;
        }

        if (this.addPatientForm.value.mobile) {
            payload.mobile = this.addPatientForm.value.mobile;
        }

        if (this.addPatientForm.value.zipcode) {
            payload.zipcode = this.addPatientForm.value.zipcode;
        }

        if (this.addPatientForm.value.gender) {
            payload.gender = this.addPatientForm.value.gender;
        }

        if (this.addPatientForm.value.blood_group) {
            payload.blood_group = this.addPatientForm.value.blood_group;
        }

        if (this.addPatientForm.value.dob) {
            payload.dob = moment(this.addPatientForm.value.dob).format('YYYY-MM-DD');
        }
        if (this.data.id) {
            // Update patient data
            this.apiService.updatePatient({...payload, patient_id: this.data.id}).subscribe((data: AddPatientResponse) => {
                if (data.status_code === '1') {
                    this.dialogRef.close();
                }
            });
        } else {
            // Add patient
            this.apiService.addPatient(payload).subscribe((data: AddPatientResponse) => {
                if (data.status_code === '1') {
                    this.dialogRef.close();
                }
            });
        }
    }

}
