---
layout: base.liquid
title: About
nav_active: about
---
<link rel="stylesheet" href="/static/necysc_app/about.css" />


<section class="container">
	<div class="hero-section shadow position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
	</div>
</section>


<section class="container mb-5 mt-5">
	<h1 class="textleft fw-bold"><i class="icon-right-circled"></i>About Us</h1>
	<p class="fs-5">
		Established in 1986, the <strong>New England Chinese Youth Summer Camp (NECYSC)</strong> is a non-profit summer camp dedicated to 
		providing cultural enrichment and fostering community spirit for Chinese-American youth. Hosted at Brandeis University in 
		Waltham, MA, our week-long summer camp serves children ages 6 to 15, offering a
		<a class="programslink" href="/programs/" style="color: #4e598c;">variety of engaging programs, including 
				Day Camp, Overnight Camp, and ExplorAsian.</a>
	</p>
	<p class="fs-5">
		Our mission is to inspire a deep appreciation for Chinese/Taiwanese culture through activities like traditional Chinese arts classes, cultural workshops, and counselor-led events. With the support of dedicated parents and volunteers, we create a fun and safe environment where campers build lifelong friendships, strengthen leadership skills, and develop a strong sense of cultural pride and community.
	</p>
</section>


<section class="container mb-5">
	<h1 class="py-4 text-center fw-bold display-6 text-purple">
		We are a <span style="text-decoration: underline; text-underline-offset: 10px;">100% parent-led, all-volunteer</span> organization
	</h1>
	<h3 class="py-4 text-center text-purple">
		<i>Built by the community, for the community</i>
	</h3>
	<p class="fs-5">
		From the planning stages to day-to-day operations, NECYSC thrives because of the incredible contributions from our parent volunteers. 
	</p>
	<p class="fs-5">
		We believe that a successful camp is one that involves the whole family, and we ask that all parents of the <a href="/programs/#day" class="text-purple">Overnight and ExplorAsian programs</a> contribute some of their time during the camp season. This helps us maintain the <strong>high standard of care, safety, and fun</strong> that we aim to provide each year.
	</p>
</section>



<section class="container mb-5" id="pod">
		<div class="bg-purple position-relative rounded-3 overflow-hidden p-4 p-md-5">
			<div class="row py-4 position-relative" style="z-index: 2;">
			<div class="col-md-12">
				<h1 class="mb-3 pt-3 fw-bold text-white" id="aboutus">
					POD Program
				</h1>
				<p class="mb-4 fs-5 text-white">
					The POD program (Parent On Duty) is a key component of NECYSC and provides a structure for parents to contribute directly to the smooth running of camp. Whether it’s helping with laundry, volunteering for POD tasks, assisting with administrative work, or taking part in special projects, every little bit of effort makes a big difference.
				</p>
				<p class="mb-4 fs-5 text-white">
					We request all parents of the Overnight or ExplorAsian program participate in the POD program to support our efforts.
				</p>
			</div>
		</div>
		<div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background-image: url('/static/necysc_app/images/about/pod_background.jpg'); background-size: cover; opacity: 0.3; z-index: 1;"></div>
	</div>
</section>



<section class="container mb-5 mt-5" id="committee">
	<h1 class="textleft fw-bold"><i class="icon-right-circled"></i>Our Committee</h1>
	<p class="fs-5">
		In addition to the POD Program, there are plenty of other ways to get involved. 
		The <strong>NECYSC Committee</strong> is made up of dedicated parent volunteers who play a vital role in ensuring the smooth operation of our camp. As a committee member, you’ll work closely with our Director and Head Counselor team to help coordinate logistics and support behind-the-scenes activities that make NECYSC possible.
	</p>
	<p class="fs-5">
		With monthly meetings and collaborative planning, parent volunteers are essential to the success of the camp and creating an unforgettable experience for our campers.
	</p>
	<p class="fs-5">
		If you’re interested in joining our team and contributing to the camp’s success, please reach out to us at <a href="mailto:director@necysc.org">director@necysc.org</a>.
	</p>
		<div class="mb-5">
		<div class="row g-3 pt-2 justify-content-center align-items-end" id="meettheteam">{% for member in config.committee %}<div class="col-xl-2 col-lg-2 col-md-3 col-4 text-center"><img onerror="this.onerror=null; this.src='/static/necysc_app/images/headshots/anonymous.png';" class="img-fluid rounded-circle mb-2" style="width: 90px; height: 90px; object-fit: cover;" src="/static/necysc_app/images/headshots/{{ member[2] }}" alt="{{ member[0] }}"><div class="small fw-bold">{{ member[0] }}</div><div class="small text-muted">{{ member[1] }}</div></div>{% endfor %}</div>
			<div class="mt-4">
				<p class="fs-5">Want to join committee? Learn more about us <a href="/staff/#committee">here.</a></p>
			</div>
		</div>
</section>



<section class="container mb-3 ">
	<h1 class="textleft fw-bold" id="sponsors" >Sponsors</h1>
	<!-- grid of cards for each sponsor, each with glow animation -->
	<div class="row">
		<div class="col-md-4 mb-4">
			<div class="card glow d-flex flex-column">
				<div class="card-body">
					<h4 class="card-title">Tow Family</h4>
					<!-- hline -->
					<div class="bg-secondary mt-3 mb-3" style="height: 1px;"></div>
					<h5 class="card-text">Dragon Sponsor</h5>
					<p class="text-secondary">The Tow family honors Alana Tow's legacy by supporting NECYSC through the Alana for Allergies Memorial Fund, in remembrance of her summers as a camper and counselor, where she made lifelong friends.</p>
				</div>
			</div>
		</div>
		<div class="col-md-4 mb-4">
			<div class="card glow h-100 d-flex flex-column">
				<div class="card-body">
					<h4 class="card-title">Cultural Center of TECO in Boston</h4>
					<div class="bg-secondary mt-3 mb-3" style="height: 1px;"></div>
					<h5 class="card-text">Diamond Sponsor</h5>
					<p class="card-text text-secondary">Thank you for your generous support to Director Mr. Chris Liao!</p>
				</div>
			</div>
		</div>
		<div class="col-md-4 mb-4">
			<div class="card glow h-100 d-flex flex-column">
				<div class="card-body">
					<h4 class="card-title">Overseas Community Affairs Council (OCAC)</h4>
					<div class="bg-secondary mt-3 mb-3" style="height: 1px;"></div>
					<h5 class="card-text">Diamond Sponsor</h5>
					<p class="card-text text-secondary">Thank you for your generous support to Director Mr. Zhuren Pan!</p>
				</div>
			</div>
		</div>
	</div>
	<div class="row">
		<div class="col-md-4 mb-4">
			<div class="card glow h-100 d-flex flex-column">
				<div class="card-body">
					<h4 class="card-title">Greater Boston Chinese Culture Association (GBCCA)</h4>
					<!-- hline -->
					<div class="bg-secondary mt-3 mb-3" style="height: 1px;"></div>
					<h5 class="card-text">Diamond Sponsor</h5>
					<p class="text-secondary">Thank you for your generous support to Ms. Shirley Wong and Ms. Renne Liu!</p>
				</div>
			</div>
		</div>
		<div class="col-md-4 mb-4">
			<div class="card glow h-100 d-flex flex-column">
				<div class="card-body">
					<h4 class="card-title">Summer Star Foundation for Nature Art and Humanity</h4>
					<!-- hline -->
					<div class="bg-secondary mt-3 mb-3" style="height: 1px;"></div>
					<h5 class="card-text">Diamond Sponsor</h5>
					<p class="text-secondary">Thank you for your generous support to Ms. Shalin Liu and the Summer Star Foundation for Nature Art and Humanity. Your contribution supports our camper outings, allowing them to connect with and appreciate the natural environment around us.</p>
				</div>
			</div>
		</div>
		<div class="col-md-4 mb-4">
			<div class="card glow h-100 d-flex flex-column">
				<div class="card-body">
					<h4 class="card-title">Breger Family</h4>
					<!-- hline -->
					<div class="bg-secondary mt-3 mb-3" style="height: 1px;"></div>
					<h5 class="card-text">Diamond Sponsor</h5>
					<p class="text-secondary">Thank you for your generous support to the Breger Family!</p>
				</div>
			</div>
		</div>
	</div>
	<div class="row">
		<div class="col-md-4 mb-4">
			<div class="card glow h-100 d-flex flex-column">
				<div class="card-body">
					<h4 class="card-title">Iridium Strategy Solutions</h4>
					<!-- hline -->
					<div class="bg-secondary mt-3 mb-3" style="height: 1px;"></div>
					<h5 class="card-text">Platinum Sponsor</h5>
					<p class="text-secondary">Thank you for your generous support to Andrew and Kim from Iridium Strategy Solutions!</p>
				</div>
			</div>
		</div>
	</div>
</section>


<section class="container mb-5 pb-5">
	<h1 class="textleft fw-bold" id="sponsors">Greater Boston Chinese Cultural Association</h1>
	<p class="fs-5"><strong>GBCCA</strong> is a non-profit organization dedicated to promoting Chinese culture and heritage in the Greater Boston area. They offer a variety of programs and events that celebrate Chinese traditions, arts, and language, fostering a sense of community and cultural pride among Chinese Americans. GBCCA also provides educational resources and support for families, helping to bridge the gap between generations and promote understanding of Chinese culture in a multicultural society.
	</p>
	<p class="fs-5">GBCCA serves as NECYSC's fiscal sponsor, allowing us to operate as a non-profit organization. Their support is invaluable in helping us achieve our mission of providing cultural enrichment and community spirit for Chinese-American youth.</p>
	<a class="btn-purple fw-bold px-4 py-2" href="https://gbcca.org/" target="_blank">Learn More</a>
</section>


<section class="container mb-3 mt-3">
	<div class="row">
		<div class="col-md-8">
			<h1 class="textleft fw-bold" id="sponsors" >Featured Partner: The BOBA Project</h1>
			<p class="fs-5">The <strong>BOBA Project</strong> is a research initiative focused on understanding the experiences 
				and perspectives of Asian American teens, specifically those <u>aged 12-18</u>, 
				and their families. Conducted by a team from Brigham and Women's Hospital 
				and Harvard Medical School, the project aims to explore issues related to 
				identity, 
				<i>mental health, and the impact of discrimination</i> through surveys and 
				interactive Zoom sessions. 
			</p>
			<p class="fs-5">By facilitating open dialogues between teens 
				and their parents, 
				the BOBA Project seeks to uplift Asian American voices and foster community 
				connections while addressing the well-being of these families in a post-pandemic 
				context
			</p>
			<a class="btn-purple fw-bold px-4 py-2" href="https://www.thebobaproject.com/" target="_blank">Learn More</a>
		</div>
		<div class="col-md-4 justify-content-center align-items-center">
			<img src="/static/necysc_app/images/about/BOBA_logo.jpg" alt="The BOBA Project" class="img-fluid">
		</div>
	</div>
</section>


</div>
