import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AddFamilyMemberPayload, AddFamilyMemberResponse, AddPatientPayload, AddPatientResponse, GetPatientPayload, GetPatientResponse, UpdatePatient } from '../../interfaces/patient.interface';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    apiEndPoint: String = environment.apiEndpoint;

    constructor(private httpClient: HttpClient) { }

    // Get patient details api
    getPatient(payload: GetPatientPayload): Observable<GetPatientResponse> {
        return this.httpClient.post<GetPatientResponse>(`${this.apiEndPoint}v1/patient/patients/view`, payload);
    }

    // Add patient api
    addPatient(payload: AddPatientPayload): Observable<AddPatientResponse> {
        return this.httpClient.post<AddPatientResponse>(`${this.apiEndPoint}v1/patient/patients/add`, payload);
    }

    // Update patient api
    updatePatient(payload: UpdatePatient): Observable<AddPatientResponse> {
        return this.httpClient.post<AddPatientResponse>(`${this.apiEndPoint}v1/patient/patients/update`, payload);
    }

    // Add patient's family member api
    addFamilyMember(payload: AddFamilyMemberPayload): Observable<AddFamilyMemberResponse> {
        return this.httpClient.post<AddFamilyMemberResponse>(`${this.apiEndPoint}v1/patient/patients/add_family_member`, payload);
    }
}
