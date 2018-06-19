import { Component, OnInit, ViewChild, OnChanges } from "@angular/core";
import { Input } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ApiService } from "../services/api.service";

@Component({
  selector: "app-edit-submission",
  templateUrl: "./edit-submission.component.html",
  styleUrls: ["./edit-submission.component.css"]
})
export class EditSubmissionComponent implements OnInit, OnChanges {
  @ViewChild("submission") submitForm: NgForm;

  @Input() data = null;
  @Input()
  onSubmitEdits(data) {}
  @Input()
  onMarkReviewed(id) {}
  @Input() state: boolean;
  categories: any = [];
  loading: boolean = false;

  constructor(private api: ApiService) {}

  ngOnChanges() {
    if (this.data.title != null) {
      this.submitForm.form.setValue({
        title: this.data.title,
        desc: this.data.desc,
        category_id: this.data.category_id
      });
    }
  }

  ngOnInit() {
    this.api.getCategories().subscribe(res => {
      this.categories = res;
    });
  }
}
