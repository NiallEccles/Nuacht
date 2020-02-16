import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news/news.service';

@Component({
  selector: 'app-reader',
  templateUrl: './reader.component.html',
  styleUrls: ['./reader.component.scss']
})
export class ReaderComponent implements OnInit {

  public data;

  constructor(public newsService: NewsService) { }

  ngOnInit() {
    this.data = this.newsService.getNews();
  }

  public test1(article){
    console.log(article);
  }

  public test2(article, event){
    console.log(article);
    event.stopPropagation();
  }

}
