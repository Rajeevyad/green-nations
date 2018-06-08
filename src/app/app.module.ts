import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {FwModule} from '../fw/fw.module';
import { FrameworkConfigService } from '../fw/services/framework-config.service';
import { ScreenService } from '../fw/services/screen.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FwModule
  ],
  providers: [FrameworkConfigService, ScreenService],
  bootstrap: [AppComponent]
})
export class AppModule { }
