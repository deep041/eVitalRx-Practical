import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as moment from 'moment';
import { map, Observable, startWith } from 'rxjs';
import { AddFamilyMemberResponse, Patient } from 'src/app/common/interfaces/patient.interface';
import { ApiService } from 'src/app/common/services/api/api.service';

@Component({
    selector: 'app-add-family-member',
    templateUrl: './add-family-member.component.html',
    styleUrls: ['./add-family-member.component.css']
})
export class AddFamilyMemberComponent implements OnInit {

    addFamilyMemberForm!: FormGroup;
    patientData!: Patient;

    relations: string[] = [ "Brother", "Sister", "Father", "Mother", "Son", "Daughter", "Grand_Father", "Grand_Mother", "Uncle", "Aunt", "Wife", "Husband", "Grand_Daughter", "Grand_Son" ];
    filteredOptions!: Observable<string[]>;

    constructor(public dialogRef: MatDialogRef<AddFamilyMemberComponent>, private apiService: ApiService, @Inject(MAT_DIALOG_DATA) public data: { id: string }) { }

    ngOnInit(): void {
        this.createForm();

        // Filter data list of relation
        this.filteredOptions = this.addFamilyMemberForm.controls['relation'].valueChanges.pipe(
            startWith(''),
            map(value => this._filter(value || '')),
        );
    }
    
    private _filter(value: string): string[] {
        const filterValue = value.toLowerCase();
    
        return this.relations.filter(option => option.toLowerCase().includes(filterValue));
    }

    createForm(): void {
        this.addFamilyMemberForm = new FormGroup({
            mobile: new FormControl('', [Validators.required, Validators.min(1000000000), Validators.max(9999999999)]),
            first_name: new FormControl('', [Validators.required]),
            last_name: new FormControl(''),
            zipcode: new FormControl(''),
            dob: new FormControl(''),
            gender: new FormControl(''),
            blood_group: new FormControl(''),
            relation: new FormControl('', [Validators.required])
        });
    }

    addPatient(): void {
        let payload: any = {};
        payload.patient_id = this.data.id;

        if (this.addFamilyMemberForm.value.first_name) {
            payload.first_name = this.addFamilyMemberForm.value.first_name;
        }

        if (this.addFamilyMemberForm.value.last_name) {
            payload.last_name = this.addFamilyMemberForm.value.last_name;
        }

        if (this.addFamilyMemberForm.value.mobile) {
            payload.mobile = this.addFamilyMemberForm.value.mobile;
        }

        if (this.addFamilyMemberForm.value.zipcode) {
            payload.zipcode = this.addFamilyMemberForm.value.zipcode;
        }

        if (this.addFamilyMemberForm.value.gender) {
            payload.gender = this.addFamilyMemberForm.value.gender;
        }

        if (this.addFamilyMemberForm.value.blood_group) {
            payload.blood_group = this.addFamilyMemberForm.value.blood_group;
        }

        if (this.addFamilyMemberForm.value.dob) {
            payload.dob = moment(this.addFamilyMemberForm.value.dob).format('YYYY-MM-DD');
        }

        if (this.addFamilyMemberForm.value.relation) {
            payload.relation = this.addFamilyMemberForm.value.relation;
        }

        // Add patient's family member
        this.apiService.addFamilyMember(payload).subscribe((data: AddFamilyMemberResponse) => {
            if (data.status_code === '1') {
                this.dialogRef.close();
            }
        });
    }

}
