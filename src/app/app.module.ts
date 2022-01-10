import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// MODULOS PRIMENG
import { PrimengModule } from './modules/primeng/primeng.module';
import { MenuComponent } from './components/menu/menu.component';
import { MenuIconComponent } from './components/menu-icon/menu-icon.component';
import { MainArticleComponent } from './components/main-article/main-article.component';
import { ProjectsComponent } from './components/projects/projects.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MenuIconComponent,
    MainArticleComponent,
    ProjectsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PrimengModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
