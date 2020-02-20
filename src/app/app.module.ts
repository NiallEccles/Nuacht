import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DrawerComponent } from './components/drawer/drawer.component';
import { OverlayComponent } from './components/overlay/overlay.component';
import { SwitchComponent } from './components/switch/switch.component';
import { ToggleComponent } from './components/toggle/toggle.component';
import { PreferencesService } from './services/preferences/preferences.service';
import { ReaderComponent } from './components/reader/reader.component';
import { RemoveSrc } from './pipes/removeSrc.pipe';
import { StarredComponent } from './components/starred/starred.component';
import { CategoryComponent } from './components/category/category.component';
import { MessageComponent } from './components/message/message.component';
import { MessageService } from './services/message/message.service';

@NgModule({
  declarations: [
    AppComponent,
    DrawerComponent,
    OverlayComponent,
    SwitchComponent,
    ToggleComponent,
    ReaderComponent,
    RemoveSrc,
    StarredComponent,
    CategoryComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [PreferencesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
