const StarWarsButton = document.querySelector('#star-wars-button')
const displayResults = document.querySelector('.results')

StarWarsButton.addEventListener('click', getInfoFromApi)

async function getInfoFromApi() {
	const baseUrl = 'https://swapi.dev/api/people/10/'
	/*const apiKey = '???'
	const settings = {
		method: 'GET',
		headers: {
			'X-Api-Key': apiKey
		}
	}*/
	const response = await fetch(baseUrl)
	const data = await response.json()
	//console.log (data)
	const info = `
	Name: ${data.name}
	Height: ${data.height}
	Mass: ${data.mass}
	Hair color: ${data.hair_color}
	Skin color:${data.skin_color}
	Eye color: ${data.eye_color}
	Birth year: ${data.birth_year}
	Gender: ${data.gender}
`
	displayResults.innerText = info
}