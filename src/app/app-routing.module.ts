import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImageDisplayComponent } from './image-display/image-display.component';
import { SatellitesComponent } from './satellites/satellites.component';

const routes: Routes = [
  {path: "image", component: ImageDisplayComponent},
  {path: "satellites", component: SatellitesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
