 
import { NgModule } from '@angular/core';
import {
      MatButtonModule,      
      MatMenuModule,      
      MatToolbarModule,      
      MatIconModule,      
      MatCardModule,      
      MatFormFieldModule,      
      MatInputModule,      
      MatDatepickerModule,      
      MatDatepicker,      
      MatNativeDateModule,      
      MatRadioModule,      
      MatSelectModule,      
      MatOptionModule,      
      MatSlideToggleModule,
      MatCheckboxModule, MatGridList, MatGridTile, MatGridListModule,
      MatSliderModule,
      MatAutocompleteModule,
      MatProgressSpinnerModule,
      MatSnackBarModule,
      MatDialogModule
} from '@angular/material'; 
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
      imports: [MatButtonModule, 
            MatAutocompleteModule,     
            MatMenuModule,      
            MatToolbarModule,      
            MatIconModule,      
            MatCardModule,      
            MatFormFieldModule,      
            MatInputModule,      
            MatDatepickerModule,     
            MatNativeDateModule,      
            MatRadioModule,      
            MatSelectModule,      
            MatOptionModule,      
            MatSlideToggleModule,
            MatCheckboxModule, MatGridListModule,
            MatSliderModule, MatProgressSpinnerModule,
            MatSnackBarModule, MatDialogModule,
            ReactiveFormsModule
      
      ],
      exports: [MatButtonModule,
            MatAutocompleteModule,      
            MatMenuModule,      
            MatToolbarModule,      
            MatIconModule,      
            MatCardModule,      
            MatFormFieldModule,      
            MatInputModule,      
            MatDatepickerModule,    
            MatNativeDateModule,      
            MatRadioModule,      
            MatSelectModule,      
            MatOptionModule,      
            MatSlideToggleModule,
            MatCheckboxModule, MatGridListModule,
            MatSliderModule, MatProgressSpinnerModule,
            MatSnackBarModule, MatDialogModule,
            ReactiveFormsModule
      
      ],
      declarations: []
})
export class MaterialdesignModule { }
