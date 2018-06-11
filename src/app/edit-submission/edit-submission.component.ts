import { Component, OnInit, ViewChild, OnChanges } from "@angular/core";
import { Input } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-edit-submission",
  templateUrl: "./edit-submission.component.html",
  styleUrls: ["./edit-submission.component.css"]
})
export class EditSubmissionComponent implements OnInit, OnChanges {
  @ViewChild("submission") submitForm: NgForm;

  @Input() data = null;
  @Input()
  onSubmitEdits() {}
  @Input()
  onMarkReviewed() {}

  private loading: boolean = false;
  constructor() {}

  ngOnChanges() {
    if (this.data.title != null) {
      this.submitForm.form.setValue({
        title: this.data.title,
        desc: this.data.desc
      });
    }
  }

  ngOnInit() {}
}
