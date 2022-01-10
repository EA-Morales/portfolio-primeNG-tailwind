import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//primeNG
import { CarouselModule } from 'primeng/carousel';
import { CardModule } from 'primeng/card';
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CarouselModule,
    CardModule,
    MenuModule,
    ButtonModule,
    SidebarModule,
  ],
  exports: [
    CarouselModule,
    CardModule,
    MenuModule,
    ButtonModule,
    SidebarModule,
  ],
})
export class PrimengModule {}
