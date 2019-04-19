import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import {
  MatSidenavModule,
  MatToolbarModule,
  MatMenuModule,
  MatListModule,
  MatIconModule,
  MatButtonModule,
  MatBadgeModule,
  MatChipsModule,
  MatRippleModule,
  MatTableModule,
  MatPaginatorModule,
  MatCardModule,
  MatTabsModule,
  MatTreeModule,
  MatStepperModule,
  MatGridListModule,
  MatExpansionModule,
  MatAutocompleteModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatInputModule,
  MatRadioModule,
  MatSelectModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatProgressSpinnerModule,
  MatProgressBarModule,
  MatBottomSheetModule,
  MatDialogModule,
  MatSnackBarModule,
  MatTooltipModule,
  MatButtonToggleModule

} from '@angular/material';

import { AppContainerComponent } from './app-container.component';
import { AppContainerViewComponent } from './app-container-view.component';
import { AppContainerLayoutComponent } from './app-container-layout.component';
import { NavSideComponent} from './nav-side.component';
import { PageViewComponent} from './page-view.component';
import { PageLayoutComponent } from './page-layout.component';

@NgModule({
  declarations: [
    NavSideComponent,
    PageViewComponent,
    PageLayoutComponent,
    AppContainerComponent,
    AppContainerViewComponent,
    AppContainerLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatBadgeModule,
    MatChipsModule,
    MatRippleModule,
    MatTableModule,
    MatPaginatorModule,
    MatCardModule,
    MatTabsModule,
    MatTreeModule,
    MatStepperModule,
    MatGridListModule,
    MatExpansionModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatBottomSheetModule,
    MatDialogModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatButtonToggleModule
  ],
  exports: [
    NavSideComponent,
    PageViewComponent,
    PageLayoutComponent,
    AppContainerComponent,
    AppContainerViewComponent,
    AppContainerLayoutComponent,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatBadgeModule,
    MatChipsModule,
    MatRippleModule,
    MatTableModule,
    MatPaginatorModule,
    MatCardModule,
    MatTabsModule,
    MatTreeModule,
    MatStepperModule,
    MatGridListModule,
    MatExpansionModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatBottomSheetModule,
    MatDialogModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatButtonToggleModule
  ]
})
export class ComponentsModule {}
