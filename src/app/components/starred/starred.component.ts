import { Component, OnInit } from "@angular/core";
import { StarredService } from "src/app/services/starred/starred.service";

@Component({
  selector: ".app-starred",
  templateUrl: "./starred.component.html",
  styleUrls: ["./starred.component.scss"]
})
export class StarredComponent implements OnInit {
  public starred;

  constructor(public starredService: StarredService) {}

  ngOnInit() {
    this.starred = this.starredService.getStarred();
  }

  public removeStarred(article, event) {
    event.stopPropagation();
    event.preventDefault();
    this.starredService.removeStarred(article);
    this.starred = this.starredService.getStarred();
  }
}
