import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ApiService } from "../../services/api.service";
import { TokenService } from "../token.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-signin",
  templateUrl: "./signin.component.html",
  styleUrls: ["./signin.component.css"]
})
export class SigninComponent implements OnInit {
  @ViewChild("signin") signIn: NgForm;
  constructor(
    private api: ApiService,
    private tokenService: TokenService,
    private router: Router
  ) {}

  ngOnInit() {}

  onSubmit() {
    this.api.authenticate(this.signIn.form.value).subscribe(res => {
      this.tokenService.setToken(res.auth_token);
      this.router.navigate(["submissions"]);
    });
  }
}
