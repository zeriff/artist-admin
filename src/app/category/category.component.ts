import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ApiService } from "../services/api.service";

@Component({
  selector: "app-category",
  templateUrl: "./category.component.html",
  styleUrls: ["./category.component.css"]
})
export class CategoryComponent implements OnInit {
  loading: boolean = false;
  categories: any = [];
  @ViewChild("category") category: NgForm;
  constructor(private api: ApiService) {}

  ngOnInit() {
    this.populateCategories();
  }

  populateCategories() {
    this.api.getCategories().subscribe(res => {
      this.categories = res;
    });
  }

  onSubmit() {
    let data = this.category.form.value;
    this.loading = true;
    this.api.postCategory(data).subscribe(res => {
      this.populateCategories();
      this.loading = false;
    });
  }
}
