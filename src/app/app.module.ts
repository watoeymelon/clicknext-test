import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisComponent } from './regis/regis.component';
import { KanbanComponent } from './kanban/kanban.component';
import { RouterModule, Routes } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

const routes: Routes = [
  { path: 'kanban', component: KanbanComponent }, // ✅ เปลี่ยนเส้นทางให้ถูกต้อง
  { path: 'login', component: LoginComponent },
  { path: 'regis', component: RegisComponent }, 
  { path: '', redirectTo: 'login', pathMatch: 'full' } // ✅ หน้าแรกเป็น Login
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisComponent,
    KanbanComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule {}
