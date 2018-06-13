import { Injectable, Inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  constructor(private http: HttpClient, @Inject("BASE_URL") private base_url) {}

  getSubmissions(): Observable<any> {
    let url = `${this.base_url}/submissions`;
    return this.http.get(url);
  }

  updateSubmission(id, data): Observable<any> {
    let url = `${this.base_url}/submissions/${id}`;
    return this.http.put(url, data);
  }

  markSubmissionReviewed(id): Observable<any> {
    let url = `${this.base_url}/submissions/mark_reviewed/${id}`;
    return this.http.get(url);
  }

  getCategories() {
    let url = `${this.base_url}/categories`;
    return this.http.get(url);
  }

  postCategory(data) {
    let url = `${this.base_url}/categories`;
    return this.http.post(url, data);
  }
}
