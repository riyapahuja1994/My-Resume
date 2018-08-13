import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "../components/home/home.component";
import { EducationExperienceComponent } from "../components/education-experience/education-experience.component";
import { ProjectsComponent } from "../components/projects/projects.component";
import { SkillsComponent } from "../components/skills/skills.component";
import { FeedbackComponent } from "../components/feedback/feedback.component";

const appRoutes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "education&experience", component: EducationExperienceComponent },
  { path: "projects", component: ProjectsComponent },
  { path: "skills", component: SkillsComponent },
  { path: "feedback", component: FeedbackComponent },
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "**", redirectTo: "/home", pathMatch: "full" }
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {}
