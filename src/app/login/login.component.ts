import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    hide: boolean = true;
    loginForm!: FormGroup;

    constructor(private router: Router, private _snackBar: MatSnackBar) { }

    ngOnInit(): void {
        this.createForm();
    }

    createForm(): void {
        this.loginForm = new FormGroup({
            mobileNumber: new FormControl('', [Validators.required, Validators.min(1000000000), Validators.max(9999999999)]),
            password: new FormControl('', [Validators.required])
        });
    }

    login(): void {
        if ((this.loginForm.value.mobileNumber === 9876543210) && (this.loginForm.value.password === 'test@admin')) {
            localStorage.setItem('user', JSON.stringify(this.loginForm.value));
            this.router.navigate(['/dashboard']);
        } else {
            this._snackBar.open('Please enter valid credentials!!', '', {
                duration: 2000
            });
        }
    }

}
