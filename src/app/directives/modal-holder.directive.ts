import { Directive, ViewContainerRef } from "@angular/core";

@Directive({
  selector: "[app-modal-holder]"
})
export class ModalHolderDirective {
  constructor(private viewContainerRef: ViewContainerRef) {}
}
