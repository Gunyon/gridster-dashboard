import {
  Directive,
  Input,
  OnChanges,
  ViewContainerRef,
  ComponentFactoryResolver,
  ComponentRef,
} from '@angular/core';
import { Example1Component } from '../components/example1/example1.component';
import { Example2Component } from '../components/example2/example2.component';

const components = {
  example1: Example1Component,
  example2: Example2Component,
};

type ComponentsRefs = 'example1' | 'example2';

@Directive({
  selector: '[appLayoutItem]',
})
export class LayoutItemDirective implements OnChanges {
  @Input()
  componentRef!: string | null;
  component!: ComponentRef<any>;

  constructor(
    private container: ViewContainerRef,
    private resolver: ComponentFactoryResolver
  ) {}

  ngOnChanges(): void {
    if (this.componentRef) {
      const component = components[this.componentRef as ComponentsRefs];

      if (component) {
        const factory = this.resolver.resolveComponentFactory<any>(component);
        this.container.clear();
        this.component = this.container.createComponent(factory);
      }
    } else {
      this.container.clear();
    }
  }
}
