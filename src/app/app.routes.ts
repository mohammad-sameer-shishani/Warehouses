import { Routes } from '@angular/router';
import { AuthModule } from './auth/auth.module';
import { WarehouseModule } from './warehouse/warehouse.module';
import { SupplyDocumentModule } from './supply-document/supply-document.module';

export const routes: Routes = [
    {
        path: '',
        loadChildren:()=>AuthModule
    },{
        path: 'auth',
        loadChildren:()=>AuthModule
    },{
        path: 'warehouses',
        loadChildren:()=>WarehouseModule
    },{
        path: 'supplydocuments',
        loadChildren:()=>SupplyDocumentModule
    }
];
