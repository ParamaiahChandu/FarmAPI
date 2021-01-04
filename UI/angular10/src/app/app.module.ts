import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpeciesComponent } from './species/species.component';
import { ShowSpeciesComponent } from './species/show-species/show-species.component';
import { AddEditSpeciesComponent } from './species/add-edit-species/add-edit-species.component';
import { SaplingComponent } from './sapling/sapling.component';
import { ShowSaplingsComponent } from './sapling/show-saplings/show-saplings.component';
import { AddEditSaplingsComponent } from './sapling/add-edit-saplings/add-edit-saplings.component';
import { SharedService } from './shared.service';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SpeciesComponent,
    ShowSpeciesComponent,
    AddEditSpeciesComponent,
    SaplingComponent,
    ShowSaplingsComponent,
    AddEditSaplingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
