import { Component, OnInit } from "@angular/core";
import { map } from "rxjs/operators";
import { timer } from "rxjs";
import { MessageService } from 'src/app/services/message/message.service';
import { IMessage } from 'src/app/services/message/message';

@Component({
  selector: ".message",
  templateUrl: "./message.component.html",
  styleUrls: ["./message.component.scss"]
})
export class MessageComponent implements OnInit {
  public static life: number = 5000;
  public static tick: number = 500;
  public messages: IMessage[] = [];

  constructor(private messageService: MessageService) {}

  ngOnInit() {
    this.messageService
      .new_message()
      .pipe(map(msg => this._init_message(msg)))
      .subscribe(msg => this.messages.push(msg));

    this._tick();
  }

  private _init_message(msg: IMessage): IMessage {
    return Object.assign(msg, { life: MessageComponent.life });
  }

  private _reduce_message_life(msg: IMessage): IMessage {
    msg.life -= MessageComponent.tick;
    return msg;
  }

  private _remove_dead_messages(): void {
    for (let i = this.messages.length - 1; i >= 0; i--) {
      if (this.messages[i].life <= 0) {
        this.messages.splice(i, 1);
      }
    }
  }

  private _tick(): void {
    timer(500).subscribe(() => {
      this.messages.map(msg => this._reduce_message_life(msg));
      this._remove_dead_messages();
      this._tick();
    });
  }

  public get_classes(msg: IMessage) {
    let classes = {
      alert: true,
      "no-margin": true,
      "margin-top": true
    };

    classes["alert-" + msg.type] = true;

    if (msg.life <= MessageComponent.tick) {
      classes["alert__fadeout"] = true;
    }

    return classes;
  }
}
