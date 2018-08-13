import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing/app-routing.module";
import { HomeComponent } from "./components/home/home.component";
import { SkillsComponent } from "./components/skills/skills.component";
import { EducationExperienceComponent } from "./components/education-experience/education-experience.component";
import { ProjectsComponent } from "./components/projects/projects.component";
import { NavigationComponent } from "./components/navigation/navigation.component";
import { FeedbackComponent } from "./components/feedback/feedback.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SkillsComponent,
    EducationExperienceComponent,
    ProjectsComponent,
    NavigationComponent,
    FeedbackComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
