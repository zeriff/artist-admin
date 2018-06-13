import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { SubmissionsComponent } from "./submissions/submissions.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { EditSubmissionComponent } from "./edit-submission/edit-submission.component";
import { ToastComponent } from "./assets/toast/toast.component";
import { LoaderComponent } from "./assets/loader/loader.component";
import { CategoryComponent } from "./category/category.component";

const BASE_URL = "http://localhost:3000";

const appRoutes: Routes = [
  { path: "", component: DashboardComponent },
  { path: "submissions", component: SubmissionsComponent },
  { path: "categories", component: CategoryComponent }
];

@NgModule({
  declarations: [
    ToastComponent,
    LoaderComponent,
    AppComponent,
    SubmissionsComponent,
    DashboardComponent,
    EditSubmissionComponent,
    CategoryComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    BrowserModule
  ],
  providers: [
    {
      provide: "BASE_URL",
      useFactory: function() {
        return BASE_URL;
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
