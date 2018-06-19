import { Component, OnInit, Input } from "@angular/core";
import { ApiService } from "../services/api.service";
import { Submission } from "../interface/submission";
import { ToastService } from "../services/toast.service";
import * as _ from "lodash";

@Component({
  selector: "app-submissions",
  templateUrl: "./submissions.component.html",
  styleUrls: ["./submissions.component.css"]
})
export class SubmissionsComponent implements OnInit {
  submissions = [];
  selectedSubmission: Submission = {};
  loading: boolean = false;
  @Input() content = "";

  constructor(private api: ApiService, private toast: ToastService) {}

  ngOnInit() {
    this.api.getSubmissions().subscribe(res => {
      this.setSubmissions(res);
    });
  }

  setSubmissions = res => {
    this.submissions = _.filter(res, i => {
      return !i.is_reviewed;
    });
  };

  onReviewClick(submission) {
    this.selectedSubmission = submission;
  }

  submitEdits = data => {
    this.loading = true;
    this.api
      .updateSubmission(this.selectedSubmission.id, data)
      .subscribe(res => {
        this.toast.show("Successfully submitted");
        _.set(this.selectedSubmission, "title", res.title);
        _.set(this.selectedSubmission, "desc", res.desc);
        this.loading = false;
      });
  };

  markReviewed = id => {
    this.loading = true;
    this.api.markSubmissionReviewed(id).subscribe(res => {
      this.toast.show("Successfully marked reviewed..");
      this.selectedSubmission.is_reviewed = true;
      this.loading = false;
      this.setSubmissions(this.submissions);
      this.selectedSubmission = {};
    });
  };
}
