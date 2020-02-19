import { Component, OnInit } from "@angular/core";
import { OverlayService } from "src/app/services/overlay/overlay.service";
import { DrawerService } from "src/app/services/drawer/drawer.service";
import { timer } from "rxjs";

@Component({
  selector: "app-drawer",
  templateUrl: "./drawer.component.html",
  styleUrls: ["./drawer.component.scss"]
})
export class DrawerComponent implements OnInit {
  public activeHover: string;
  public isClosed: boolean;
  public categories = [
    {
      id: 0,
      name: "All",
      icon: "dynamic_feed",
      endpoint: "/"
    },
    {
      id: 1,
      name: "Starred",
      icon: "star",
      endpoint: "/starred"
    },
    {
      id: 2,
      name: "Business",
      icon: "business",
      endpoint: "/category/business"
    },
    {
      id: 3,
      name: "Entertainment",
      icon: "local_activity",
      endpoint: "/category/entertainment"
    },
    {
      id: 4,
      name: "Health",
      icon: "local_hospital",
      endpoint: "/category/health"
    },
    {
      id: 5,
      name: "Science",
      icon: "category",
      endpoint: "/category/science"
    },
    {
      id: 6,
      name: "Sports",
      icon: "sports_volleyball",
      endpoint: "/category/sports"
    },
    {
      id: 7,
      name: "Technology",
      icon: "photo_camera",
      endpoint: "/category/technology"
    }
  ];

  constructor(
    public overlayService: OverlayService,
    public drawerService: DrawerService
  ) {
    this.drawerService.drawerStatus().subscribe(data => {
      this.isClosed = data;
    });
  }

  ngOnInit() {
    if (localStorage.getItem("settings")) {
      this.isClosed = JSON.parse(localStorage.getItem("settings")).find(
        i => i.name === "Minimal"
      ).value;
    } else {
      this.isClosed = false;
    }
  }

  public toggleDrawer() {
    this.isClosed = !this.isClosed;
  }

  public openOverlay() {
    this.overlayService.toggleOverlay(true);
  }

  public getTheme() {
    return JSON.parse(localStorage.getItem("settings")).find(
      i => i.name === "Dark Mode"
    );
  }

  public getDrawer() {
    this.drawerService.toggleDrawer(
      JSON.parse(localStorage.getItem("settings")).find(
        i => i.name === "Minimal"
      ).value
    );
  }
  public setHover(event) {
    this.activeHover = event.toElement.id;
  }
  public clearHover() {
    this.activeHover = "";
  }
}
