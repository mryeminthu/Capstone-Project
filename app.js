// Hamburger
const toggleBtn = document.getElementsByClassName("toggle")[0];
const fiveMenu = document.getElementsByClassName("five-menu")[0];
const sect1 = document.getElementsByTagName("section")[0];
const sect2 = document.getElementsByTagName("section")[1];
const sect3 = document.getElementsByTagName("section")[2];
const sect4 = document.getElementsByTagName("section")[3];
const footer = document.getElementsByTagName("footer")[0];
toggleBtn.addEventListener("click", () => {
  fiveMenu.classList.toggle("active");
  sect1.style.display = "none";
  sect2.style.display = "none";
  sect3.style.display = "none";
  sect4.style.display = "none";
  footer.style.display = "none";
});
const crossBtn = document.getElementsByClassName("cross")[0];
crossBtn.addEventListener("click", () => {
  fiveMenu.classList.remove("active");
  sect1.style.display = "block";
  sect2.style.display = "block";
  sect3.style.display = "block";
  sect4.style.display = "block";
  footer.style.display = "block";
});
fiveMenu.addEventListener("click", () => {
  fiveMenu.classList.remove("active");
});

//Coaches
const coaches = [
  {
    name: 'Aung La N Sang',
    description: 'Born in Myanmar, he currently competes in both the middleweight and light heavyweight divisions.',
    imageSrc: 'images/aungla.jpg',
    bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
  },
  {
    name: 'Anatoly Malykhin',
    description: 'The current ONE Light Heavyweight Champion and ONE Heavyweight World Champion',
    imageSrc: 'images/malykhin.jpg',
    bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
  },
  {
    name: 'Arjan Bhullar',
    description: 'The former ONE Heavyweight World Champion',
    imageSrc: 'images/bhullar.jpg',
    bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
  },
  {
    name: 'Rodtang Jitmuangnon',
    description: 'He currently competes in ONE Championship and is the reigning ONE Flyweight Muay Thai World Champion.',
    imageSrc: 'images/rodtang.jpg',
    bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
  },
  {
    name: 'Christian Lee',
    description: 'Lee is the fourth two-division champion in ONE history and holds the promotion\'s records for most wins (17), most finishes (16), and most knockouts (12).',
    imageSrc: 'images/christian.jpg',
    bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
  },
  {
    name: 'Vitaly Bigdash',
    description: 'Vitaly Bigdash was a former ONE Middleweight World Champion.',
    imageSrc: 'images/vitaly.jpg',
    bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
  }
];

const coachesContainer = document.querySelector('.six-box');
for (let i = 0; i < coaches.length; i += 1) {
  const coach = coaches[i];
  const coachCard = document.createElement('section');
  coachCard.classList.add('sect3_child');
  const coachImage = document.createElement('img');
  coachImage.src = coach.imageSrc;
  coachImage.alt = coach.name;
  coachCard.appendChild(coachImage);
  const coachInfo = document.createElement('article');
  coachInfo.classList.add('sect3_article');
  const coachName = document.createElement('h3');
  coachName.innerHTML = coach.name;
  coachInfo.appendChild(coachName);
  const coachDescription = document.createElement('p');
  coachDescription.classList.add('sect3_para1');
  coachDescription.innerHTML = coach.description;
  coachInfo.appendChild(coachDescription);
  const coachDivider = document.createElement('div');
  coachDivider.classList.add('line');
  coachInfo.appendChild(coachDivider);
  const coachBio = document.createElement('p');
  coachBio.innerHTML = coach.bio;
  coachInfo.appendChild(coachBio);
  coachCard.appendChild(coachInfo);
  coachesContainer.appendChild(coachCard);
}