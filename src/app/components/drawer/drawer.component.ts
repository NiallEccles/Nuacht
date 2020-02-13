import { Component, OnInit } from "@angular/core";
import { OverlayService } from "src/app/services/overlay/overlay.service";
import { DrawerService } from "src/app/services/drawer/drawer.service";

@Component({
  selector: "app-drawer",
  templateUrl: "./drawer.component.html",
  styleUrls: ["./drawer.component.scss"]
})
export class DrawerComponent implements OnInit {
  public isClosed: boolean;
  public categories = [
    {
      id: 1,
      name: "Business",
      icon: "business"
    },
    {
      id: 2,
      name: "Entertainment",
      icon: "local_activity"
    },
    {
      id: 3,
      name: "Health",
      icon: "local_hospital"
    },
    {
      id: 4,
      name: "Science",
      icon: "category"
    },
    {
      id: 5,
      name: "Sports",
      icon: "sports_volleyball"
    },
    {
      id: 6,
      name: "Technology",
      icon: "photo_camera"
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
    if(localStorage.getItem("settings")){
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
}