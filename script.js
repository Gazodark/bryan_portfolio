const mobileMenu = document.getElementById("mobile_menu");
mobileMenu.addEventListener("click",()=>{
    const destopMenu = document.getElementById("desktop_menu");
    destopMenu.classList.toggle("active");
    mobileMenu.classList.toggle("active");
})
// An array for card objects

const projectCards = [
    {
     image:"",
     title: "Multi-Post Stories Gain+Glory",
     technologies: [
        "Ruby On Rails",
        "CSS",
        "JavaScript",
        "HTML"
     ],
    link:"#"
    },

    {
        image:"",
        title: "Multi-Post Stories Gain+Glory",
        technologies: [
           "Ruby On Rails",
           "CSS",
           "JavaScript",
           "HTML"
        ],
       link:"#"
       },

       {
        image:"",
        title: "Multi-Post Stories Gain+Glory",
        technologies: [
           "Ruby On Rails",
           "CSS",
           "JavaScript",
           "HTML"
        ],
       link:"#"
       },

       {
        image:"",
        title: "Multi-Post Stories Gain+Glory",
        technologies: [
           "Ruby On Rails",
           "CSS",
           "JavaScript",
           "HTML"
        ],
       link:"#"
       },

       {
        image:"",
        title: "Multi-Post Stories Gain+Glory",
        technologies: [
           "Ruby On Rails",
           "CSS",
           "JavaScript",
           "HTML"
        ],
       link:"#"
       },

       {
        image:"",
        title: "Multi-Post Stories Gain+Glory",
        technologies: [
           "Ruby On Rails",
           "CSS",
           "JavaScript",
           "HTML"
        ],
       link:"#"
       }
] 
// Fuction to create a card
function createProjectCards(project)
{
    const card = document.createElement('div');
    card.classList.add("project_card");
    const picture = document.createElement('img');
    picture.src = project.image;
    picture.alt = project.title;
    card.appendChild(picture);
    const titre = document.createElement("h3");
    titre.innerHTML = project.title;
    card.appendChild(titre);
    const list = document.createElement("ul");
    project.technologies.forEach(element => {
        const listItem = document.createElement("li");
        listItem.innerHTML = element;
        list.appendChild(listItem);

    });
    card.appendChild(list);
    const cardButton = document.createElement("button");
    cardButton.innerText = "see project"
    card.appendChild(cardButton);
    return card;

}
// Function to render project card
function displayProjectCard()
{
    const projectCardsContainer = document.querySelector(".project_cards");
    projectCards.forEach(project => {
        const projectCard = createProjectCards(project);
        projectCardsContainer.appendChild(projectCard)
        
    });

}
document.addEventListener("DOMContentLoaded",displayProjectCard);