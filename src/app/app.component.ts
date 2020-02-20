import { Component, OnInit } from "@angular/core";
import { OverlayService } from "./services/overlay/overlay.service";
import { ThemeService } from "./services/theme/theme.service";
import { NewsService } from './services/news/news.service';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  title = "Nuacht";
  public overlayOpen: boolean;
  constructor(
    public overlayService: OverlayService,
    public themeService: ThemeService,
    public newsService: NewsService
  ) {
    this.overlayService.overlayStatus().subscribe(data => {
      this.overlayOpen = data;
    });
  }

  ngOnInit() {
    if(localStorage.getItem("settings")){
      this.themeService.toggleTheme(
        JSON.parse(localStorage.getItem("settings")).find(
          i => i.name === "Dark Mode"
        ).value
      );
    } else {
      this.themeService.toggleTheme(false);
    }
  }
}
