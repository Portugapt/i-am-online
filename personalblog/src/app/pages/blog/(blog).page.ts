import { Component, AfterViewInit } from "@angular/core";
import { RouterOutlet, RouterLink } from "@angular/router";
import { injectContentFiles } from "@analogjs/content";

import { NgFor } from "@angular/common";
import { BlogPost } from "../../models/post";
import { ContentActiveService } from "../../services/content.service";



@Component({
  standalone: true,
  imports: [RouterOutlet, RouterLink, NgFor],
  template: `
    <h1>My Blog</h1>
    hello world
    <ul>
      <li *ngFor="let post of posts">
        <a [routerLink]="['/blog', post.slug]">{{ post.attributes.title }}</a>
      </li>
    </ul>
  `,
})
export default class BlogPage implements AfterViewInit {
  constructor(private $contentActive: ContentActiveService) {}

  ngAfterViewInit(): void {
    // Activate the generalized signal when this component becomes active
    this.$contentActive.contentActive.set(true);
  }

  readonly posts = injectContentFiles<BlogPost>((contentFile) =>
    contentFile.filename.includes("/src/content/blog")
  );
}
