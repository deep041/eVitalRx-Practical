export interface AddPatientPayload {
    apikey: string,
    mobile: number,
    first_name: string,
    last_name: string,
    zipcode: string,
    dob: string,
    gender: string,
    blood_group: string
}

export interface AddPatientResponse {
    data: data
    datetime: string,
    status_code: string,
    status_message: string
}

interface data {
    patient_id: string
}

export interface Patient {
    mobile: string,
    firstname: string,
    lastname: string,
    zipcode: string,
    patient_id: string
}

export interface GetPatientPayload {
    patient_id: string
}

export interface GetPatientResponse {
    datetime: string,
    status_code: string,
    status_message: string,
    data: Patient[]
}

export interface UpdatePatient {
    apikey: string,
    mobile: number,
    first_name: string,
    last_name: string,
    zipcode: string,
    dob: string,
    gender: string,
    blood_group: string,
    patient_id: string
}

export interface AddFamilyMemberPayload {
    apikey: string,
    mobile: number,
    first_name: string,
    last_name: string,
    zipcode: string,
    dob: string,
    gender: string,
    blood_group: string,
    patient_id: string,
    relation: string
}

export interface AddFamilyMemberResponse {
    data: FamilyMember
    datetime: string,
    status_code: string,
    status_message: string
}

interface FamilyMember {
    mobile: number,
    firstname: string,
    lastname: string,
    zipcode: string,
    dob: string,
    gender: string,
    blood_group: string,
    patient_family_member_id: string,
    relation: string
}