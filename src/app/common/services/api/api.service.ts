import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AddFamilyMemberPayload, AddFamilyMemberResponse, AddPatientPayload, AddPatientResponse, GetPatientPayload, GetPatientResponse, UpdatePatient } from '../../interfaces/patient.interface';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    apiEndPoint: String = 'https://dev-api.evitalrx.in/';

    constructor(private httpClient: HttpClient) { }

    getPatients(): Observable<any> {
        return this.httpClient.get(`${this.apiEndPoint}v1/patient/patients`);
    }

    getPatient(payload: GetPatientPayload): Observable<GetPatientResponse> {
        return this.httpClient.post<GetPatientResponse>(`${this.apiEndPoint}v1/patient/patients/view`, payload);
    }

    addPatient(payload: AddPatientPayload): Observable<AddPatientResponse> {
        return this.httpClient.post<AddPatientResponse>(`${this.apiEndPoint}v1/patient/patients/add`, payload);
    }

    updatePatient(payload: UpdatePatient): Observable<AddPatientResponse> {
        return this.httpClient.post<AddPatientResponse>(`${this.apiEndPoint}v1/patient/patients/update`, payload);
    }

    addFamilyMember(payload: AddFamilyMemberPayload): Observable<AddFamilyMemberResponse> {
        return this.httpClient.post<AddFamilyMemberResponse>(`${this.apiEndPoint}v1/patient/patients/add_family_member`, payload);
    }
}
