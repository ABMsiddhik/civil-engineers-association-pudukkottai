
        // Toggle business info, services container, and contact form
        function toggleBusinessInfo() {
            const businessInfo = document.getElementById('businessInfo');
            const scrollableContainer = document.getElementById('scrollableContainer');
            const contactFormContainer = document.getElementById('contactFormContainer');
            const toggleBtn = document.querySelector('.toggle-button');

            businessInfo.classList.toggle('expanded');
            scrollableContainer.classList.toggle('expanded');
            contactFormContainer.classList.toggle('expanded');

            if (businessInfo.classList.contains('expanded')) {
                toggleBtn.innerHTML = '<i class="fas fa-chevron-up"></i> Hide Business Information';
            } else {
                toggleBtn.innerHTML = '<i class="fas fa-chevron-down"></i> Business Information';
            }
        }

        // Image slider functionality
        let currentSlide = 0;
        const sliderImages = [
            "./assets/images/architecture-images/architecture-1.png",
            "./assets/images/architecture-images/architecture-2.png",
            "./assets/images/architecture-images/architecture-3.png",
            "./assets/images/3d-elevation-images/3d-elevation-1.png",
            "./assets/images/3d-elevation-images/3d-elevation-2.png",
            "./assets/images/3d-elevation-images/3d-elevation-3.png",
            "./assets/images/interior-design-images/interior-design-1.png",
            "./assets/images/interior-design-images/interior-design-2.png",
            "./assets/images/interior-design-images/interior-design-3.png",
            "./assets/images/building-structurals-images/building-structurals-1.png",
            "./assets/images/building-structurals-images/building-structurals-2.png",
            "./assets/images/building-structurals-images/building-structurals-3.png",
            "./assets/images/projects-images/project-1.png",
            "./assets/images/projects-images/project-2.png",
            "./assets/images/projects-images/project-3.png",
            "./assets/images/projects-images/project-4.png",
            "./assets/images/projects-images/project-5.png",
            "./assets/images/projects-images/project-6.png",
            "./assets/images/gallery-images/gallery-image-1.png",
            "./assets/images/gallery-images/gallery-image-2.png",
            "./assets/images/gallery-images/gallery-image-3.png",
            "./assets/images/gallery-images/gallery-image-4.png",
            "./assets/images/gallery-images/gallery-image-5.png",
            "./assets/images/gallery-images/gallery-image-6.png",
            "./assets/images/gallery-images/gallery-image-7.png",
            "./assets/images/gallery-images/gallery-image-8.png",
            "./assets/images/gallery-images/gallery-image-9.png",
            "./assets/images/gallery-images/gallery-image-10.png",
            "./assets/images/gallery-images/gallery-image-11.png",
            "./assets/images/gallery-images/gallery-image-12.png"
        ];

        function openSlider(index) {
            currentSlide = index;
            document.getElementById('sliderImage').src = sliderImages[currentSlide];
            document.getElementById('sliderContainer').classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        function closeSlider() {
            document.getElementById('sliderContainer').classList.remove('active');
            document.body.style.overflow = 'auto';
        }

        function changeSlide(direction) {
            currentSlide += direction;

            if (currentSlide < 0) {
                currentSlide = sliderImages.length - 1;
            } else if (currentSlide >= sliderImages.length) {
                currentSlide = 0;
            }

            document.getElementById('sliderImage').src = sliderImages[currentSlide];
        }

        // Close slider when clicking outside the image
        document.getElementById('sliderContainer').addEventListener('click', function (e) {
            if (e.target === this) {
                closeSlider();
            }
        });

        // Keyboard navigation for slider
        document.addEventListener('keydown', function (e) {
            const slider = document.getElementById('sliderContainer');
            if (slider.classList.contains('active')) {
                if (e.key === 'Escape') {
                    closeSlider();
                } else if (e.key === 'ArrowLeft') {
                    changeSlide(-1);
                } else if (e.key === 'ArrowRight') {
                    changeSlide(1);
                }
            }
        });
