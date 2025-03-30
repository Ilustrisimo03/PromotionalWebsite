
// NAVBAR MENU
const mobileMenuButton = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-menu");
const mobileDropdownButton = document.getElementById("mobile-dropdown-button");
const mobileDropdown = document.getElementById("mobile-dropdown");

// Toggle Mobile Menu Visibility
mobileMenuButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("invisible"); // Prevents layout shift
    mobileMenu.classList.toggle("opacity-0"); // Smooth fade effect
    mobileMenu.classList.toggle("scale-95");  // Slight zoom-out effect
});

// Toggle Mobile Dropdown Visibility
mobileDropdownButton.addEventListener("click", () => {
    mobileDropdown.classList.toggle("hidden");
});



// DROWPDOWN ABOUT US
    const dropdownButton = document.getElementById('about-dropdown-button');
    const dropdownMenu = document.getElementById('about-dropdown');

    dropdownButton.addEventListener('click', () => {
        dropdownMenu.classList.toggle('opacity-0');
        dropdownMenu.classList.toggle('invisible');
        dropdownMenu.classList.toggle('scale-95');
        dropdownMenu.classList.toggle('scale-100');
    });

    // Close dropdown if clicked outside
    window.addEventListener('click', (e) => {
        if (!dropdownButton.contains(e.target) && !dropdownMenu.contains(e.target)) {
            dropdownMenu.classList.add('opacity-0', 'invisible', 'scale-95');
            dropdownMenu.classList.remove('scale-100');
        }
    });





// CAROUSEL HERO SECTIOn
    const images = [
        '../ASSETS/Images/promotional1.png',
        '../ASSETS/Images/promotional2.png',
        '../ASSETS/Images/promotional3.png',
        '../ASSETS/Images/promotional4.png'
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




        document.addEventListener("DOMContentLoaded", function () {
          const elements = document.querySelectorAll("nav, section, footer"); // Kasama na ang navbar
      
          const observer = new IntersectionObserver(
              (entries) => {
                  entries.forEach((entry) => {
                      if (entry.isIntersecting) {
                          entry.target.classList.add("opacity-100");
                          entry.target.classList.remove("opacity-0");
                      } else {
                          entry.target.classList.add("opacity-0"); // Magiging invisible ulit kapag lumabas sa viewport
                      }
                  });
              },
              { threshold: 0.2 }
          );
      
          elements.forEach((element) => observer.observe(element));
      });
      