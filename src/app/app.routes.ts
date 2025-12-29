import { Routes } from '@angular/router';
import { Product } from './product/product';
import { SingleviewList } from './product/singleview-list/singleview-list';
import { Home } from './home/home';




export const routes: Routes = [
    {path:'product',component:Product},
    {path:'singleview-list/:titleid',component:SingleviewList},
    {path:'home',component:Home},
    
];
