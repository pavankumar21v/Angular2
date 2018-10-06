import { Injectable, ViewContainerRef } from '@angular/core';
import { ToastsManager } from 'ng2-toastr';

@Injectable()
export class ToasterService {

  constructor(private toastr : ToastsManager, vcr : ViewContainerRef) { 
    toastr.setRootViewContainerRef(vcr);
  }

  showSuccess(msg : string) {
    this.toastr.success(msg, 'Success!');
  }

  showError(msg : string) {
    this.toastr.error(msg, 'Oops!');
  }

  showWarning(msg : string) {
    this.toastr.warning(msg, 'Alert!');
  }

  showInfo(msg : string) {
    this.toastr.info(msg);
  }
  
  showCustom(msg : string) {
    this.toastr.custom('<span style="color: red">Message in red.</span>', null, {enableHTML: true});
  }
}
