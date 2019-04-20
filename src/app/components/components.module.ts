<<<<<<< HEAD
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material.module';

import { PageViewComponent} from './page-view.component';
import { PageLayoutComponent } from './page-layout.component';
=======
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule
} from '@angular/material';

import {AppContainerComponent} from './app-container.component';
import {AppContainerViewComponent} from './app-container-view.component';
import {AppContainerLayoutComponent} from './app-container-layout.component';
import {NavSideComponent} from './nav-side.component';
import {PageViewComponent} from './page-view.component';
import {PageLayoutComponent} from './page-layout.component';
>>>>>>> 6d7083b4252ca22ca6bc45ad23964a3e9f8e93da


@NgModule({
  declarations: [
    PageViewComponent,
    PageLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ],
  exports: [
    PageViewComponent,
    PageLayoutComponent,
    MaterialModule
  ]
})
export class ComponentsModule {
}
