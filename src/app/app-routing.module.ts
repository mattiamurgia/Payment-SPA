import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BillingComponent } from './components/billing/billing.component';
import { CoverageComponent } from './components/coverage/coverage.component';
import { PaymentsComponent } from './components/payments/payments.component';
import { HomepageComponent } from './components/homepage/homepage.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
    loadChildren: () =>
      import('./components/homepage/lazyModuleHomepage/homepage.module').then(
        (m) => m.HomepageModule
      ),
  },
  {
    path: 'billing',
    component: BillingComponent,
    loadChildren: () =>
      import('./components/billing/lazyModuleBilling/billing.module').then(
        (m) => m.BillingModule
      ),
  },
  {
    path: 'coverage',
    component: CoverageComponent,
    loadChildren: () =>
      import('./components/coverage/lazyModuleCoverage/coverage.module').then(
        (m) => m.CoverageModule
      ),
  },
  {
    path: 'payment',
    component: PaymentsComponent,
    loadChildren: () =>
      import('./components/payments/lazyModulePayment/payment.module').then(
        (m) => m.PaymentModule
      ),
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
