import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ad-host]'
})
export class SidedirDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
