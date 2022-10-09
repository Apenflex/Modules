// Events on Scroll
function scrollEvents() {
	const sections = document.querySelectorAll(".section");
	const links = document.querySelectorAll(".nav__link");
	const menu = document.querySelector(".nav__list");

	const observer = new IntersectionObserver(
    	(entries) => {
      	entries.forEach((entry) => {
			if (entry.isIntersecting) {
				links.forEach((link) => {
					const linkHref = link.getAttribute("href").replace("#", "");

					if (linkHref === entry.target.id) {
						link.classList.add("active");
					} else {
						link.classList.remove("active");
					}
          		});
        	}
      	});
    	},
			{
			threshold: 0.8,
			}
  	);
	
	sections.forEach((section) => {
		observer.observe(section);
	});

	menu.addEventListener("click", (e) => {
		if (e.target.classList.contains("nav__link")) {
			e.preventDefault();
			const sectionId = e.target.getAttribute("href").replace("#", "");
			window.scrollTo({
				top: document.getElementById(sectionId).offsetTop,
				behavior: "smooth",
			});
		}
	});
}
scrollEvents();

// Animate Progress Bar
function animateProgressBar() {
	const progress = document.querySelector(".progress__bar");
// Value scroll from top page
	const scrollValue = document.documentElement.scrollTop;
// Width of all elements
	const documentHeight = document.documentElement.scrollHeight;
// Width of user screen
	const viewPortHeight = document.documentElement.clientHeight;
// Width of all elements - Width of user screen
	const height = documentHeight - viewPortHeight;
// Percent of scroll
	const scrollPercent = (scrollValue / height) * 100;
// Style of progress bar
	progress.style.width = `${scrollPercent}%`;
}
window.addEventListener("scroll", animateProgressBar);