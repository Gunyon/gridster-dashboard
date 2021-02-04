import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { GridsterModule } from 'angular-gridster2';
import { Example1Component } from './components/example1/example1.component';
import { Example2Component } from './components/example2/example2.component';
import { LayoutItemDirective } from './directives/layout-item.directive';
import { NgxEchartsModule } from 'ngx-echarts';
import { ChartComponent } from './components/chart/chart.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    Example1Component,
    Example2Component,
    LayoutItemDirective,
    ChartComponent,
  ],
  entryComponents: [Example1Component, Example2Component],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GridsterModule,
    NgxEchartsModule.forRoot({
      /**
       * This will import all modules from echarts.
       * If you only need custom modules,
       * please refer to [Custom Build] section.
       */
      echarts: () => import('echarts'), // or import('./path-to-my-custom-echarts')
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
