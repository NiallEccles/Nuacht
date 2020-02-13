import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DrawerComponent } from './components/drawer/drawer.component';
import { OverlayComponent } from './components/overlay/overlay.component';
import { SwitchComponent } from './components/switch/switch.component';
import { ToggleComponent } from './components/toggle/toggle.component';
import { PreferencesService } from './services/preferences/preferences.service';

@NgModule({
  declarations: [
    AppComponent,
    DrawerComponent,
    OverlayComponent,
    SwitchComponent,
    ToggleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [PreferencesService],
  bootstrap: [AppComponent]
})
export class AppModule { }