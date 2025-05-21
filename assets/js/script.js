document.getElementById('theme-toggle').addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
});

let searchBox = document.getElementById('search');
if (searchBox) {
    searchBox.addEventListener('keyup', function() {
        let filter = this.value.toLowerCase();
        let projects = document.querySelectorAll('.project-card');

        projects.forEach(project => {
            let title = project.getAttribute('data-title')?.toLowerCase() || "";
	    if (title.includes(filter)) {
	        project.style.opacity = "1";
	        project.style.transform = "scale(1)";
	        project.style.display = "block";
	    } else {
	        project.style.opacity = "0";
	        project.style.transform = "scale(0.95)";
	        setTimeout(() => project.style.display = "none", 300);
	    }
        });
    });
}
