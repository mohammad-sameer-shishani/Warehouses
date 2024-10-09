import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SupplyDocumentsViewComponent } from './supply-documents-view/supply-documents-view.component';
import { AddSupplyDocumentComponent } from './add-supply-document/add-supply-document.component';

const routes: Routes = [
  {
    path:"",
    component:SupplyDocumentsViewComponent
  },{
    path:"SupplyDocumentsView",
    component:SupplyDocumentsViewComponent
  },{
    path:"AddSupplyDocument",
    component:AddSupplyDocumentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupplyDocumentRoutingModule { }
