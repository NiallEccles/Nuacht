import { Injectable } from "@angular/core";
import { Subject, Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class DrawerService {
  private drawer$: Subject<any>;

  constructor() {
    this.drawer$ = new Subject<boolean>();
  }
  public drawerStatus(): Observable<boolean> {
    return this.drawer$.asObservable();
  }

  public toggleDrawer(boolean): void {
    this.drawer$.next(boolean);
  }
}
