---
layout: home
title: "Welcome to my portfolio"
description: "An insight to my projects and skills"
---

## About me


## Latest projects

<input type="text" id="search" placeholder="Search projects..." />

<div class="projects-grid">
{% for post in site.posts %}
  <div class="project-card" data-title="{{ post.title }}">
    <h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
    <p>{{ post.date | date: "%B %d, %Y" }}</p>
  </div>
{% endfor %}
</div>
