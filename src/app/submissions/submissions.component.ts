import { Component, OnInit, Input } from "@angular/core";
import { ApiService } from "../service/api.service";
import { Submission } from "../interface/submission";

@Component({
  selector: "app-submissions",
  templateUrl: "./submissions.component.html",
  styleUrls: ["./submissions.component.css"]
})
export class SubmissionsComponent implements OnInit {
  private submissions = [];
  private selectedSubmission: Submission = {};
  private loading: boolean = false;
  @Input() content = "";

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.api.getSubmissions().subscribe(res => {
      this.submissions = res;
    });
  }

  onReviewClick(submission) {
    this.loading = true;
    this.selectedSubmission = submission;
    console.log(submission);
  }

  submitEdits(data) {
    this.api
      .updateSubmission(this.selectedSubmission.id, data)
      .subscribe(res => {});
  }

  markReviewed(id) {
    console.log(id);
  }
}
