import { Component, OnInit } from "@angular/core";
import { OverlayService } from "src/app/services/overlay/overlay.service";
import { DrawerService } from "src/app/services/drawer/drawer.service";
import { ThemeService } from "src/app/services/theme/theme.service";
import { PreferencesService } from 'src/app/services/preferences/preferences.service';

@Component({
  selector: "app-overlay",
  templateUrl: "./overlay.component.html",
  styleUrls: ["./overlay.component.scss"]
})
export class OverlayComponent implements OnInit {
  constructor(
    public overlayService: OverlayService,
    public drawerService: DrawerService,
    public themeService: ThemeService,
    public preferencesService: PreferencesService
  ) {}

  public defaults: any;
  public settings: any;
  private STORAGE_NAME = "settings";
  public filters: any;

  ngOnInit() {
    this.defaults = this.preferencesService.getDefaults();
    this.filters = this.preferencesService.getFilters();
  }

  public closeOverlay() {
    this.overlayService.toggleOverlay(false);
  }

  updateSettings(value, name) {
    this.preferencesService.updateDefaults({value, name})
  }

  updateFilters(value, name) {
    this.preferencesService.updateFilters({value, name});
  }

  getStorage() {
    return JSON.parse(localStorage.getItem(this.STORAGE_NAME));
  }

  setStorage(item) {
    return localStorage.setItem(this.STORAGE_NAME, JSON.stringify(item));
  }
}
