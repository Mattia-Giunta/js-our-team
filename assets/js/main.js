// Descrizione

// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.

// Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.

// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.

// MILESTONE 1:
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto

// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe

// BONUS 1:
// Trasformare la stringa foto in una immagine effettiva

// BONUS 2:
// Organizzare i singoli membri in card/schede

// Consigli del giorno:
// Ragioniamo come sempre a step.
// Prima la logica in italiano e poi traduciamo in codice.


// array del team
const arrayCard = [
    {
        name: 'Wayne Barnett',
        job: 'Founder & CEO',
        linkImg: 'wayne-barnett-founder-ceo.jpg'

    },
    {
        name: 'Angela Caroll',
        job: 'Chief Editor',
        linkImg: 'angela-caroll-chief-editor.jpg'

    },
    {
        name: 'Walter Gordon',
        job: 'Office Manager',
        linkImg: 'walter-gordon-office-manager.jpg'

    },
    {
        name: 'Angela Lopez',
        job: 'Social Media Manager',
        linkImg: 'angela-lopez-social-media-manager.jpg'

    },
    {
        name: 'Scott Estrada',
        job: 'Developer',
        linkImg: 'scott-estrada-developer.jpg'

    },
    {
        name: 'Barbara Ramos',
        job: 'Graphic Designer',
        linkImg: 'barbara-ramos-graphic-designer.jpg'

    },
]

console.log(arrayCard)

// ciclo per inserire le card nell'HTML 
for( let i = 0; i < arrayCard.length; i++){

    console.log(arrayCard[i].name)
    console.log(arrayCard[i].job)
    console.log(arrayCard[i].linkImg)

    // selettore del div contenitore per inserire le card
    document.querySelector("div.row").innerHTML += `

        <div class="col">

            <div class="card h-100">

                <img src="./assets/img/${arrayCard[i].linkImg}" class="card-img-top">

                <div class="card-body">

                    <h5 class="card-title">${arrayCard[i].name}</h5>
                    <p class="card-text">${arrayCard[i].job}</p>

                </div>

            </div>

        </div>

    `
}

// Terminato esercizio