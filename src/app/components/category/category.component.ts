import { Component, OnInit, AfterContentChecked } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-category",
  templateUrl: "./category.component.html",
  styleUrls: ["./category.component.scss"]
})
export class CategoryComponent implements OnInit, AfterContentChecked {
  public category = "";

  constructor(public router: Router) {}

  ngOnInit() {}

  ngAfterContentChecked() {
    this.category = this.router.url.split("/")[2];
  }
}
