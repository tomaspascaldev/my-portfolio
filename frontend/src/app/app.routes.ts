import { Route } from '@angular/router';

import { PortfolioComponent } from './features/portfolio/portfolio.component';

export const appRoutes: Route[] = [
    {
        path: '',
        component: PortfolioComponent
    }
];
