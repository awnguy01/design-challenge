import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { MainComponent } from './components/main/main.component';
import { BubbleChartComponent } from './components/bubble-chart/bubble-chart.component';
import { MaskedLoginComponent } from './components/masked-login/masked-login.component';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { MetricsChartComponent } from './components/metrics-chart/metrics-chart.component';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { DesignsPageComponent } from './components/designs-page/designs-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MainComponent,
    BubbleChartComponent,
    MaskedLoginComponent,
    BarChartComponent,
    MetricsChartComponent,
    HomeComponent,
    DesignsPageComponent
  ],
  imports: [ BrowserModule, AppRoutingModule ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
