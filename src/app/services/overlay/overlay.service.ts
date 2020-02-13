import { Injectable } from "@angular/core";
import { Subject, Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class OverlayService {
  private overlay$: Subject<any>;

  constructor() {
    this.overlay$ = new Subject<boolean>();
  }

  public overlayStatus(): Observable<boolean> {
    return this.overlay$.asObservable();
  }

  public toggleOverlay(boolean): void {
    this.overlay$.next(boolean);
  }
}
