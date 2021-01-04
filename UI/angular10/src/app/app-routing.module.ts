import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SaplingComponent } from './sapling/sapling.component';
import { SpeciesComponent } from './species/species.component';


const routes: Routes = [
{path:'sapling',component:SaplingComponent},
{path:'species',component:SpeciesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
