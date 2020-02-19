import { Injectable } from "@angular/core";
import { Subject, Observable } from "rxjs";
import { IMessage } from "./message";

@Injectable({
  providedIn: "root"
})
export class MessageService {
  private _new_message$: Subject<IMessage>;

  constructor() {
    this._new_message$ = new Subject<IMessage>();
  }

  public new_message(): Observable<IMessage> {
    return this._new_message$.asObservable();
  }

  public add(msg: IMessage): void {
    this._new_message$.next(msg);
  }
}
