import { RouterModule, Routes, Router } from '@angular/router';
import { NgModule } from '@angular/core';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { BubbleChartComponent } from './components/bubble-chart/bubble-chart.component';
import { MaskedLoginComponent } from './components/masked-login/masked-login.component';
import { MetricsChartComponent } from './components/metrics-chart/metrics-chart.component';
import { HomeComponent } from './components/home/home.component';
import { DesignsPageComponent } from './components/designs-page/designs-page.component';

const ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'designs', component: DesignsPageComponent },
  { path: 'contact', component: BubbleChartComponent },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [ RouterModule.forRoot(ROUTES) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
