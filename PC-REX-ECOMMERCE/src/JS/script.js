const mobileMenuButton = document.getElementById("mobile-menu-button");
        const mobileMenu = document.getElementById("mobile-menu");
        const mobileDropdownButton = document.getElementById("mobile-dropdown-button");
        const mobileDropdown = document.getElementById("mobile-dropdown");

        mobileMenuButton.addEventListener("click", () => {
            mobileMenu.classList.toggle("hidden");
            setTimeout(() => {
                mobileMenu.classList.toggle("opacity-0");
                mobileMenu.classList.toggle("scale-95");
            }, 10);
        });

        mobileDropdownButton.addEventListener("click", () => {
            mobileDropdown.classList.toggle("hidden");
        });






    const images = [
        '../ASSETS/Images/pcblue.jpg',
        '../ASSETS/Images/pc.webp',
        '../ASSETS/Images/pcblue.jpg',
        '../ASSETS/Images/pc.webp'
      ];
      
      let index = 0;
      const bg1 = document.getElementById('hero-bg-1');
      const bg2 = document.getElementById('hero-bg-2');
      
      bg1.style.backgroundImage = `url(${images[0]})`;
      bg1.classList.add('show');
      
      function preloadImage(url) {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = url;
          img.onload = () => resolve(url);
        });
      }
      
      async function changeHeroImage() {
        index = (index + 1) % images.length;
        const nextImage = await preloadImage(images[index]);
      
        if (bg1.classList.contains('show')) {
          bg2.style.backgroundImage = `url(${nextImage})`;
          bg2.classList.add('show');
          bg1.classList.remove('show');
        } else {
          bg1.style.backgroundImage = `url(${nextImage})`;
          bg1.classList.add('show');
          bg2.classList.remove('show');
        }
      }
      
      setInterval(changeHeroImage, 4000);



         // Function to toggle between login and sign-up form
         function toggleForm() {
            document.getElementById("login-form").classList.toggle("hidden");
            document.getElementById("signup-form").classList.toggle("hidden");
        }







      