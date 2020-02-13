import { Injectable } from "@angular/core";
import { Subject, Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ThemeService {
  private theme$: Subject<any>;

  constructor() {
    this.theme$ = new Subject<boolean>();
    this.theme$.subscribe(data => {
      data ? this.darkTheme() : this.lightTheme();
    });
  }

  public themeStatus(): Observable<boolean> {
    return this.theme$.asObservable();
  }

  public toggleTheme(boolean): void {
    this.theme$.next(boolean);
  }

  public lightTheme() {
    document.documentElement.style.setProperty("--background", "#fffffe");
    document.documentElement.style.setProperty("--headline", "#094067");
    document.documentElement.style.setProperty("--paragraph", "#5f6c7b");
    document.documentElement.style.setProperty("--button", " #3da9fc");
    document.documentElement.style.setProperty("--button-text", "#fffffe");
    document.documentElement.style.setProperty("--stroke", "#094067");
    document.documentElement.style.setProperty("--secondary", "#90b4ce");
    document.documentElement.style.setProperty("--tertiary", "#ef4565");
  }

  public darkTheme() {
    document.documentElement.style.setProperty("--background", "#16161a");
    document.documentElement.style.setProperty("--headline", "#16161a");
    document.documentElement.style.setProperty("--paragraph", "#94a1b2");
    document.documentElement.style.setProperty("--button", " #7f5af0");
    document.documentElement.style.setProperty("--button-text", "#fffffe");
    document.documentElement.style.setProperty("--stroke", "#2cb67d");
    document.documentElement.style.setProperty("--secondary", "#72757e");
    document.documentElement.style.setProperty("--tertiary", "#2cb67d");
  }
}
