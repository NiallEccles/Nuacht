import { Injectable } from "@angular/core";
import { Subject, Observable } from "rxjs";
import { DrawerService } from "../drawer/drawer.service";
import { ThemeService } from "../theme/theme.service";

@Injectable({
  providedIn: "root"
})
export class PreferencesService {
  public DEFAULTS_STORAGE_KEY = "settings";
  public FILTERS_STORAGE_KEY = "filters";
  public defaults = [
    { name: "Dark Mode", value: false },
    { name: "Minimal", value: false }
  ];

  public filters = [
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
    { name: "Outbreaknewstoday.com", blocked: false },
    { name: "Dailysabah.com", blocked: false },
    { name: "The42.ie", blocked: false },
    { name: "Extra.ie", blocked: false },
    { name: "Irishmirror.ie", blocked: false },
    { name: "Google News", blocked: false },
    { name: "Dublinlive.ie", blocked: false },
    { name: "The Verge", blocked: false },
    { name: "Notebookcheck.net", blocked: false },
    { name: "Sciencealert.com", blocked: false },
  ];

  constructor(
    public drawerService: DrawerService,
    public themeService: ThemeService
  ) {
    if (localStorage.getItem(this.DEFAULTS_STORAGE_KEY)) {
      this.defaults = JSON.parse(
        localStorage.getItem(this.DEFAULTS_STORAGE_KEY)
      );
    } else {
      localStorage.setItem(
        this.DEFAULTS_STORAGE_KEY,
        JSON.stringify(this.defaults)
      );
    }
    if (localStorage.getItem(this.FILTERS_STORAGE_KEY)) {
      this.filters = JSON.parse(localStorage.getItem(this.FILTERS_STORAGE_KEY));
    } else {
      localStorage.setItem(
        this.FILTERS_STORAGE_KEY,
        JSON.stringify(this.filters)
      );
    }
  }

  public getDefaults(): {}[] {
    return this.defaults;
  }

  public getFilters(): {}[] {
    return this.filters;
  }

  public updateDefaults(item): void {
    const index = this.defaults.indexOf(
      this.defaults.find(i => i.name === item.name)
    );
    const local = this.getStorage(this.DEFAULTS_STORAGE_KEY);
    local[index].value = item.value;
    this.setStorage(this.DEFAULTS_STORAGE_KEY, local);
    switch (item.name) {
      case "Minimal":
        this.drawerService.toggleDrawer(item.value);
        break;
      case "Dark Mode":
        this.themeService.toggleTheme(item.value);
        break;
      default:
        this.drawerService.toggleDrawer(false);
        this.themeService.toggleTheme(false);
        break;
    }
  }

  public updateFilters(item): void {
    const filter = this.getStorage(this.FILTERS_STORAGE_KEY).find(
      i => i.name === item.name
    );
    filter.blocked = item.value;
    this.filters.find(i => i.name === item.name).blocked = filter.blocked;
    this.setStorage(this.FILTERS_STORAGE_KEY, this.filters);
  }

  getStorage(key) {
    return JSON.parse(localStorage.getItem(key));
  }

  setStorage(key, item) {
    return localStorage.setItem(key, JSON.stringify(item));
  }
}
