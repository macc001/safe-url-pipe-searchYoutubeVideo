import { Component } from "@angular/core";
import { SafeResourceUrl, DomSanitizer } from "@angular/platform-browser";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  safeUrl: SafeResourceUrl;
  results$: Observable<Array<any>>;

  constructor(
    private sanitizer: DomSanitizer,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.results$ = this.http.get(
      "https://www.googleapis.com/youtube/v3/search?part=snippet&q=robocop&topicId=%2Fm%2F02vxn&key=AIzaSyB42WhSTkS6_0uUPX6EuGakkGz4RHXnlIc"
    ).pipe(
      map(res => res.items),
      map((items: Array<any>) => {
        return items.map(item => ({
          title: item.snippet.title,
          vidoeUrl: `https://www.youtube.com/embed/${item.id.videoId}`,
        }))
      })
    );
  }
}
