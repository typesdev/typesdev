import { Component } from '@angular/core';
import { ViewChild } from '@angular/core';
import { SidedirDirective } from './directives/sidedir.directive';
import { ComponentFactoryResolver } from '@angular/core';
import { SidemenuService } from './services/sidemenu.service';
import { DemocomponentComponent } from './democomponent/democomponent.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('SidedirDirective') Sidedir: SidedirDirective;
  constructor(private sideService: SidemenuService , private componentFactoryResolver: ComponentFactoryResolver) {
    this.sideService.event.subscribe(
      (component) => {
        console.log(this.Sidedir);
        const factory = this.componentFactoryResolver.resolveComponentFactory(component);
        this.Sidedir.viewContainerRef.createComponent(factory);
      }
    );
  }
}