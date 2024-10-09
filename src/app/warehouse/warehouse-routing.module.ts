import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WarehouseViewComponent } from './warehouse-view/warehouse-view.component';
import { AddWarehouseComponent } from './add-warehouse/add-warehouse.component';

const routes: Routes = [
  {path:"",
    component:WarehouseViewComponent
  },
  {path:"WarehouseView",
    component:WarehouseViewComponent
  },
  {path:"AddWarehouse",
    component:AddWarehouseComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WarehouseRoutingModule { }
