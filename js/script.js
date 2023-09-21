// 1. creo un array con all'interno oggetti con i dati di ogni membro del team
// 1. ciclo l'array per avere accesso agli oggetti
// 1. con i selettori per oggetti estraggo i dati per ogni membro e li visualizzo in console
// 1. stampo in dom tutti i dati


const ourTeam = [
  {
    name: 'WayneBarnet',
    role: 'Founder & CEO',
    photo: 'img/wayne-barnett-founder-ceo.jpg'
  },

  {
    name: 'Angela Caroll',
    role: 'Chief Editor',
    photo: 'img/angela-caroll-chief-editor.jpg'
  },

  {
    name: 'Walter Gordon',
    role: 'Office Manager',
    photo: 'img/walter-gordon-office-manager.jpg'
  },

  {
    name: 'Angela Lopez',
    role: 'Social Media Manager',
    photo: 'img/angela-lopez-social-media-manager.jpg'
  },

  {
    name: 'Scott Estrada',
    role: 'Developer',
    photo: 'img/scott-estrada-developer.jpg'
  },

  {
    name: 'Barbara Ramos',
    role: 'Graphic Designer',
    photo: 'img/barbara-ramos-graphic-designer.jpg'
  }  
]

console.log (ourTeam)

const row = document.querySelector('.row');

for(let member of ourTeam){
  console.log(member)
  console.log(member.name)

  row.innerHTML += `<div class="col my-3"><div class="card remove-border text-center"><img src="${member.photo}" alt=""><h3 class="mt-3">${member.name}</h3><p>${member.role}</p></div></div>`
}
