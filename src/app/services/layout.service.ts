import { Injectable } from '@angular/core';
import { GridsterConfig, GridsterItem } from 'angular-gridster2';
import { UUID } from 'angular2-uuid';

export interface IComponent {
  id: string;
  componentRef: string;
}

@Injectable({
  providedIn: 'root',
})
export class LayoutService {
  public options: GridsterConfig = {
    gridType: 'scrollVertical',
    draggable: {
      enabled: true,
    },
    pushItems: true,
    resizable: {
      enabled: true,
    },
  };
  public layout: GridsterItem[] = [];
  public components: IComponent[] = [];

  private dropId = '';

  constructor() {}

  addItem(): void {
    this.layout.push({
      cols: 5,
      id: UUID.UUID(),
      rows: 5,
      x: 0,
      y: 0,
    });
  }

  deleteItem(id: string): void {
    const item = this.layout.find((d) => d.id === id) as GridsterItem;
    this.layout.splice(this.layout.indexOf(item), 1);
    const comp = this.components.find((c) => c.id === id) as IComponent;
    this.components.splice(this.components.indexOf(comp), 1);
  }

  setDropId(dropId: string): void {
    this.dropId = dropId;
  }

  dropItem(dragId: string): void {
    const { components } = this;
    const comp: IComponent = components.find(
      (c) => c.id === this.dropId
    ) as IComponent;
    const updateIdx: number = comp
      ? components.indexOf(comp)
      : components.length;
    const componentItem: IComponent = {
      id: this.dropId,
      componentRef: dragId,
    };
    this.components = Object.assign([], components, {
      [updateIdx]: componentItem,
    });
  }

  getComponentRef(id: string): string | null {
    const comp = this.components.find((c) => c.id === id);
    return comp ? comp.componentRef : null;
  }
}
