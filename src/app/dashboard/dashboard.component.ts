import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { Router } from '@angular/router';
import { CommonService } from '../common/services/common/common.service';


@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    @ViewChild(MatSort) sort!: MatSort;

    displayColumns: string[] = ['firstname', 'lastname', 'zipcode', 'mobile', 'action'];
    dataSource = new MatTableDataSource([
        { 'firstname': 'Deep', 'lastname': 'Patel', 'zipcode': '382630', 'mobile': '7777948698', 'id': 'YNjOv+oEhM2Ig2373eh/nA==' },
        { 'firstname': 'Chintan', 'lastname': 'Patel', 'zipcode': '382028', 'mobile': '7984743695', 'id': 'axGhm0TYws7slPLRwEa/JQ==' }
    ]);

    constructor(public dialog: MatDialog, private router: Router, public commonService: CommonService) { }

    ngOnInit(): void {
    }

    openDialog(id?: string) {
        this.dialog.open(AddPatientComponent, {
            data: {
                id
            },
        });
    }

    redirect(id: string): void {
        this.router.navigate(['dashboard/view'], { queryParams: {id}})
    }

}
