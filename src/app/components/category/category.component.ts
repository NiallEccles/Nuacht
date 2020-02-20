import { Component, OnInit } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";
import { NewsService } from "src/app/services/news/news.service";

@Component({
  selector: ".app-category",
  templateUrl: "./category.component.html",
  styleUrls: ["./category.component.scss"]
})
export class CategoryComponent implements OnInit {
  public category = "";
  public data: any;

  constructor(public router: Router, public newsService: NewsService) {
    router.events.subscribe(val => {
      if (val instanceof NavigationEnd) {
        this.category = this.router.url.split("/")[2];
        this.data = this.newsService.getNews(this.category);
      }
    });
  }

  ngOnInit() {}

}
