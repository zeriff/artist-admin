import { Component, OnInit } from "@angular/core";
import { ToastService } from "../../services/toast.service";

@Component({
  selector: "app-toast",
  templateUrl: "./toast.component.html",
  styleUrls: ["./toast.component.css"]
})
export class ToastComponent implements OnInit {
  message: string = "";
  active: boolean = false;

  constructor(private toastService: ToastService) {}

  ngOnInit() {
    this.toastService.toastState.subscribe(state => {
      this.message = state.message;
      this.active = state.active;
    });
  }
}
