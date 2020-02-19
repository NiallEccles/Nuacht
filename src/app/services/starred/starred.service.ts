import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class StarredService {
  constructor() {}

  public async updateStarred(starredItem) {
    if (localStorage.getItem("starred")) {
      const starredItems = JSON.parse(localStorage.getItem("starred"));
      if (!this.containsObject(starredItem, starredItems)) {
        starredItems.push(starredItem);
        localStorage.setItem("starred", JSON.stringify(starredItems));
      }
    } else {
      const initStarred = [];
      initStarred.push(starredItem);
      localStorage.setItem("starred", JSON.stringify(initStarred));
    }
  }

  public getStarred() {
    if (localStorage.getItem("starred")) {
      return JSON.parse(localStorage.getItem("starred"));
    } else {
      return [];
    }
  }

  public removeStarred(article) {
    const starredItems = JSON.parse(localStorage.getItem("starred"));
    let index;
    for (
      let articleIndex = 0;
      articleIndex < starredItems.length;
      articleIndex++
    ) {
      if (starredItems[articleIndex].title === article.title) {
        index = articleIndex;
      }
    }
    starredItems.splice(index, 1);
    localStorage.setItem("starred", JSON.stringify(starredItems));
  }

  public containsObject(obj, list) {
    let i;
    for (i = 0; i < list.length; i++) {
      if (list[i].title === obj.title) {
        return true;
      }
    }

    return false;
  }
}
