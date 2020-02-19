import { Component, OnInit } from "@angular/core";
import { NewsService } from "src/app/services/news/news.service";
import { StarredService } from "src/app/services/starred/starred.service";
import { MessageService } from 'src/app/services/message/message.service';
import { IMessageType } from 'src/app/services/message/message';

@Component({
  selector: ".app-reader",
  templateUrl: "./reader.component.html",
  styleUrls: ["./reader.component.scss"]
})
export class ReaderComponent implements OnInit {
  public data;
  public currentItem;

  constructor(
    public newsService: NewsService,
    public starredService: StarredService,
    public messageService: MessageService
  ) {}

  ngOnInit() {
    this.data = this.newsService.getNews();
  }

  public addToStarred(article, event) {
    event.stopPropagation();
    event.preventDefault();
    this.messageService.add({text: "Added", type: IMessageType.Success})
    this.starredService.updateStarred(article);
  }
}
