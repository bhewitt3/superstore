import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Shop } from './shop/shop';
import { Contact } from './contact/contact';
import { ProductDetails } from './product-details/product-details';

export const routes: Routes = [
    {
        path: '',
        component: Home,
        title: 'Superstore - Home'
    },
    {
        path: 'shop',
        component: Shop,
        title: 'Superstore - Shop'
    },
    {
        path: 'shop/:productId',
        component: ProductDetails,
    },
    {
        path: 'contact',
        component: Contact,
        title: 'Superstore - Contact'
    }
];
