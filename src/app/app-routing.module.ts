import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImageDisplayComponent } from './image-display/image-display.component';
import { EclipseComponent } from './eclipse/eclipse.component';

const routes: Routes = [
  {path: "image", component: ImageDisplayComponent},
  {path: "eclipse", component: EclipseComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
