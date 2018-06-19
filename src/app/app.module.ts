import { BrowserModule } from "@angular/platform-browser";
import { NgModule, ErrorHandler } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { SubmissionsComponent } from "./submissions/submissions.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { EditSubmissionComponent } from "./edit-submission/edit-submission.component";
import { ToastComponent } from "./assets/toast/toast.component";
import { LoaderComponent } from "./assets/loader/loader.component";
import { CategoryComponent } from "./category/category.component";
import { SigninComponent } from "./auth/signin/signin.component";

import { TokenInterceptor } from "./auth/token.interceptor";
import { ErrorsHandler } from "./providers/errors.handler";

const BASE_URL = "https://54ae2508.ngrok.io";

const appRoutes: Routes = [
  { path: "", component: DashboardComponent },
  { path: "submissions", component: SubmissionsComponent },
  { path: "categories", component: CategoryComponent },
  { path: "auth/signin", component: SigninComponent }
];

@NgModule({
  declarations: [
    ToastComponent,
    LoaderComponent,
    AppComponent,
    SubmissionsComponent,
    DashboardComponent,
    EditSubmissionComponent,
    CategoryComponent,
    SigninComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    BrowserModule
  ],
  providers: [
    {
      provide: ErrorHandler,
      useClass: ErrorsHandler
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
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
