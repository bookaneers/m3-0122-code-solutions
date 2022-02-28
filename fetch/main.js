fetch('https://jsonplaceholder.typicode.com/users', {
  method: 'GET'
})
  .then(res => res.json())
  .then(users => console.log(users))
  .catch(err => console.error('Fetch failed', err));

// fetch('https://pokeapi.co/api/v2/pokemon/1')
//     .then(res => res.json())
//     .then(bulbasaur => console.log(bulbasaur))
//     .catch(err => console.error('Fetch failed', err))
