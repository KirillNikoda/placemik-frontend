import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SearchComponent } from './ui/components/search/search.component';
import { MegaMenuComponent } from './ui/components/mega-menu/mega-menu.component';
import { SubMenuComponent } from './ui/components/sub-menu/sub-menu.component';
import { GeoComponent } from './ui/components/geo/geo.component';
import { IconsComponent } from './ui/components/icons/icons.component';
import { HeaderComponent } from './ui/layout/header.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    SearchComponent,
    MegaMenuComponent,
    SubMenuComponent,
    GeoComponent,
    IconsComponent,
    HeaderComponent
  ],
  exports: [HeaderComponent]
})
export class HeaderModule {}
