import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

// aca se agregan los modules de material
import {
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatBadgeModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatChipsModule,
    MatTooltipModule,
    MatTableModule,
    MatPaginatorModule,
    MatMenuModule,
    MatDialogModule,
    MatSnackBarModule,
    MatCardModule,
    MatTabsModule,
    MatProgressBarModule
 } from '@angular/material';


 @NgModule({
    imports: [
       CommonModule,
       MatButtonModule,
       MatToolbarModule,
       MatIconModule,
       MatSidenavModule,
       MatBadgeModule,
       MatListModule,
       MatGridListModule,
       MatFormFieldModule,
       MatInputModule,
       MatSelectModule,
       MatRadioModule,
       MatDatepickerModule,
       MatNativeDateModule,
       MatChipsModule,
       MatTooltipModule,
       MatTableModule,
       MatPaginatorModule,
       FlexLayoutModule,
       MatMenuModule,
       MatDialogModule,
       MatSnackBarModule,
       MatCardModule,
       MatTabsModule,
       MatProgressBarModule
    ],
    exports: [
       MatButtonModule,
       MatToolbarModule,
       MatIconModule,
       MatSidenavModule,
       MatBadgeModule,
       MatListModule,
       MatGridListModule,
       MatInputModule,
       MatFormFieldModule,
       MatSelectModule,
       MatRadioModule,
       MatDatepickerModule,
       MatChipsModule,
       MatTooltipModule,
       MatTableModule,
       MatPaginatorModule,
       MatMenuModule,
       MatDialogModule,
       MatSnackBarModule,
       MatCardModule,
       MatTabsModule,
       MatProgressBarModule
    ],
    providers: [
       MatDatepickerModule,
    ]
 })

export class MaterialModule { }