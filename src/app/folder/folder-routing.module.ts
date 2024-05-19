import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FolderPage } from './folder.page';
import { PdfviewerComponent } from './modules/view-pdf/views/pdfviewer/pdfviewer.component';

const routes: Routes = [
  {
    path: '',
    component: FolderPage
  },
  {
    path: 'pdfviewer',
    component: PdfviewerComponent
  },
  {
    path: 'pdfviewer2',
    component: PdfviewerComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FolderPageRoutingModule { }
