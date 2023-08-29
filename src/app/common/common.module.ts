import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';

const components = [
    HeaderComponent,
    FooterComponent
]

@NgModule({
    declarations: [
        ...components
    ],
    imports: [
        CommonModule,
        RouterModule,
        HttpClientModule,
        MatSnackBarModule
    ],
    exports: [
        ...components
    ]
})
export class CommonComponentsModule { }
