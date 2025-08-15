---
pagination:
  data: collections.times
  size: 1
  alias: yearData
permalink: "/times/{{ yearData.year }}/"
layout: base.liquid
---

<link rel="stylesheet" href="/static/necysc_app/style.css" />
<style>
.times-newsletter-img {
    display: block;
    margin: 2rem auto;
    width: 60%;
    max-width: 1000px;
    height: auto;
    border-radius: 12px;
    box-shadow: 0 2px 16px rgba(100, 115, 255, 0.08);
    transition: box-shadow 0.2s;
}
.times-newsletter-img:hover {
    box-shadow: 0 0 32px 8px rgba(100, 115, 255, 0.18), 0 2px 8px rgba(0,0,0,0.08);
}

@media (max-width: 600px) {
.times-newsletter-img {
width: 100% !important;
max-width: 100vw !important;
margin-left: 0 !important;
margin-right: 0 !important;
}
}
</style>

<div class="container">
    <section>
        <div class="hero-section position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light" style="min-height: 400px; background-image: url('/static/necysc_app/images/hero/about_hero.jpg'); background-size: cover; background-position: center;">
            <div class="overlay" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.25);"></div>
        </div>
    </section>
    <section class="container text-center mt-4 mb-2">
        <h1 class="display-4 fw-bold text-purple">{{ yearData.year }} NECYSC Times</h1>
        <p class="lead">Daily newsletters from our {{ yearData.year }} camp session.</p>
    </section>

    <section class="mt-5">
        {% for newsletter in yearData.newsletters %}
            <a href="{{ newsletter.image }}" target="_blank">
                <img src="{{ newsletter.image }}" alt="{{ newsletter.day }} Newsletter" class="times-newsletter-img" />
            </a>
        {% endfor %}
    </section>

    <section class="mt-5 mb-5 text-center">
        <a href="/times/" class="btn btn-outline-purple rounded-pill px-4">
            <i class="bi bi-arrow-left me-2"></i>Back to Times Archive
        </a>
    </section>

</div>
