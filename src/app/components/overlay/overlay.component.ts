import { Component, OnInit } from "@angular/core";
import { OverlayService } from "src/app/services/overlay/overlay.service";
import { DrawerService } from "src/app/services/drawer/drawer.service";
import { ThemeService } from "src/app/services/theme/theme.service";

@Component({
  selector: "app-overlay",
  templateUrl: "./overlay.component.html",
  styleUrls: ["./overlay.component.scss"]
})
export class OverlayComponent implements OnInit {
  constructor(
    public overlayService: OverlayService,
    public drawerService: DrawerService,
    public themeService: ThemeService
  ) {}

  public defaults: any;
  public settings: any;
  private STORAGE_NAME = "settings";
  public filters: any;

  ngOnInit() {
    this.defaults = [
      { name: "Dark Mode", value: false },
      { name: "Minimal", value: false }
    ];
    this.filters = [
      { name: "The Irish Times", blocked: false },
      { name: "Theguardian.com", blocked: false },
      { name: "Independent.ie", blocked: false },
      { name: "Thejournal.ie", blocked: false },
      { name: "Livescience.com", blocked: false },
      { name: "Bbc.com", blocked: false },
      { name: "Geneticliteracyproject.org", blocked: false },
      { name: "RTE", blocked: false },
      { name: "CNN", blocked: false },
      { name: "Thesun.ie", blocked: false },
      { name: "Breakingnews.ie", blocked: false },
      { name: "Irishexaminer.com", blocked: false },
      { name: "Outbreaknewstoday.com", blocked: false }
    ];
    this.getSettings();
    this.getFilters();
  }

  public closeOverlay() {
    this.overlayService.toggleOverlay(false);
  }

  updateSettings(value, name) {
    const index = this.defaults.indexOf(
      this.defaults.find(i => i.name === name)
    );
    const local = this.getStorage();
    local[index].value = value;
    this.setStorage(local);
    switch (name) {
      case "Minimal":
        this.drawerService.toggleDrawer(value);
        break;
      case "Dark Mode":
        this.themeService.toggleTheme(value);
      default:
        break;
    }
  }

  updateFilters(value, name) {
    const item = JSON.parse(localStorage.getItem("filters")).find(
      i => i.name === name
    );
    item.value = value;
    this.filters.find(i => i.name === name).blocked = value;
    localStorage.setItem("filters", JSON.stringify(this.filters));
  }

  getSettings() {
    if (localStorage.getItem("settings")) {
      this.defaults = this.getStorage();
    } else {
      this.setStorage(this.defaults);
    }
  }

  getFilters() {
    if (localStorage.getItem("filters")) {
      this.filters = JSON.parse(localStorage.getItem("filters"));
    } else {
      localStorage.setItem("filters", JSON.stringify(this.filters));
    }
  }

  getStorage() {
    return JSON.parse(localStorage.getItem(this.STORAGE_NAME));
  }

  setStorage(item) {
    return localStorage.setItem(this.STORAGE_NAME, JSON.stringify(item));
  }
}
