import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { ToastState } from "../interface/toast-state";

@Injectable({
  providedIn: "root"
})
export class ToastService {
  private toastSubject = new Subject<ToastState>();
  toastState = this.toastSubject.asObservable();
  constructor() {
    this.hide();
  }
  show(message) {
    this.toastSubject.next({
      active: true,
      message: message
    });
    setTimeout(() => {
      this.hide();
    }, 5000);
  }
  hide() {
    this.toastSubject.next({
      active: false,
      message: ""
    });
  }
}
