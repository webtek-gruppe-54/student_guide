// Keep track of the current open dropdown
let currentDropdown = null;

document.querySelectorAll('#mainMenu li').forEach(item => {
    item.addEventListener('click', event => {
        // Hide all dropdowns first
        document.querySelectorAll('.dropdown-content').forEach(dropdown => {
            dropdown.style.display = 'none';
        });

        let dropdown = item.querySelector('.dropdown-content');
        if (dropdown) {
            if (currentDropdown === dropdown) {
                // If clicked on the same dropdown, hide it and set currentDropdown to null
                dropdown.style.display = 'none';
                currentDropdown = null;
            } else {
                // Otherwise, show clicked dropdown and update currentDropdown
                dropdown.style.display = 'block';
                currentDropdown = dropdown;
            }
        }
        event.stopPropagation();  // Stop event from reaching the document level
    });
});

// Hide dropdown if clicked anywhere else on the document
document.addEventListener('click', () => {
    if (currentDropdown) {
        currentDropdown.style.display = 'none';
        currentDropdown = null;
    }
});

//Slideshow
document.addEventListener('DOMContentLoaded', (event) => {
    const images = [
        "Studentersamfundet.png",
        "Nidarosdomen.jpg",
        "Bakklandet2.jpeg",
        "Bymarka.jpg",
        "HavetBadstu.jpeg",
      ];

    const figureText = [
      "Samfundet: Trondheims Sirkel av Kultur, Samhold og Scenedebatter, for og av studenter",
      "Nidarosdomen: Trondheims Historiske Hjerte og Norges Nasjonale Helligdom",
      "Bakklandet i Trondheim: Pastellhus, Brosteinsgater og Byens Pulserende Møteplass",
      "Bymarka: Trondheims Grønne Skattkammer med Stier for Alle Steg og Ski",
      "HAVET på Nyhavna: Lunhet, Kultur og Kos i Trondheims Sjøkant",
    ]
    
    const samfundetCoordinate = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1785.0766029015138!2d10.392433477648467!3d63.422495376848595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x466d319143981307%3A0xb5338a2acc49470f!2sStudent%20Society%20in%20Trondheim!5e0!3m2!1sen!2sno!4v1699626737090!5m2!1sen!2sno";
    const nidarosdomenCoordinate = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1784.8016878709757!2d10.394362577648714!3d63.42690967685129!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x466d31908505a019%3A0xb965bfe4f7eb71fd!2sNidaros%20Cathedral!5e0!3m2!1sen!2sno!4v1699627087612!5m2!1sen!2sno";
    const bakklandetCoordinate = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14278.368989750055!2d10.383474426700811!3d63.42699901847168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x466d3199d5a848d3%3A0xf21172d7531520e4!2sBakklandet%2C%207016%20Trondheim!5e0!3m2!1sen!2sno!4v1699627261965!5m2!1sen!2sno";
    const bymarkaCoordinate = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7140.081801508411!2d10.229242390285515!3d63.42339702958511!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x466d3294669c22d7%3A0xb7bd60df03c671bf!2sBymarka!5e0!3m2!1sen!2sno!4v1699628326220!5m2!1sen!2sno";
    const havetbadstuCoordinate = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7135.518712132939!2d10.406657946230393!3d63.44171311149806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x466d31070737dbdb%3A0x1605ef106d0d47f!2sHAVET!5e0!3m2!1sen!2sno!4v1699628368502!5m2!1sen!2sno";

    const coordinates = [samfundetCoordinate, nidarosdomenCoordinate, bakklandetCoordinate, bymarkaCoordinate, havetbadstuCoordinate]; 
    
    let index = 0;
  
    //Slideshow Images
    function showSlide(n) {
      const slide = document.getElementById('slide');
      if (n >= images.length) index = 0;
      if (n < 0) index = images.length - 1;
      slide.src = `images/${images[index]}`;
    }

    //Slideshow GoogleMaps
    function showMap(n) {
        const slide = document.getElementById('maps');
        slide.src = coordinates[index];
      }

    //Slideshow Figuretext
    function showFigureText() {
      const slide = document.getElementById('bildetekst');
      slide.textContent = figureText[index];
    }
  
    document.getElementById('next').addEventListener('click', () => {
      index++;
      showSlide(index);
      showMap(index);
      showFigureText(index);
    });
  
    document.getElementById('prev').addEventListener('click', () => {
      index--;
      showSlide(index);
      showMap(index);
    });
  
    showSlide(index);
    showMap(index);
    showFigureText(index);
  });
  
//sticky navbar function
window.onscroll = function() {
  let navbar = document.getElementById("navbar");
  if (window.scrollY > 0) {
    // Add a class when the scroll is more than 0
    navbar.classList.add("sticky");
  } else {
    // Remove the class when the scroll is back to the top
    navbar.classList.remove("sticky");
  }
};