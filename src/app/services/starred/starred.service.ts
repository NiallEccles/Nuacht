import { Injectable } from "@angular/core";
import { MessageService } from "../message/message.service";
import { IMessageType } from "../message/message";

@Injectable({
  providedIn: "root"
})
export class StarredService {
  constructor(private messageService: MessageService) {}

  public async updateStarred(starredItem) {
    if (localStorage.getItem("starred")) {
      const starredItems = JSON.parse(localStorage.getItem("starred"));
      if (!this.containsObject(starredItem, starredItems)) {
        starredItems.push(starredItem);
        localStorage.setItem("starred", JSON.stringify(starredItems));
        this.messageService.add({
          text: "Starred",
          type: IMessageType.Success
        });
      } else {
        this.messageService.add({
          text: "Already in Starred",
          type: IMessageType.Warning
        });
      }
    } else {
      const initStarred = [];
      initStarred.push(starredItem);
      localStorage.setItem("starred", JSON.stringify(initStarred));
      this.messageService.add({ text: "Starred", type: IMessageType.Success });
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
    this.messageService.add({ text: "Removed", type: IMessageType.Success });
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
