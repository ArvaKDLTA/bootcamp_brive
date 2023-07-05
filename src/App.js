import { useEffect, useState } from 'react';
import './App.css';
import { Characters } from './components/Characters.jsx';

function App() {
  const [ characters, setCharacters ] = useState([])

  

  function getCharacters(){
    const res = fetch("https://rickandmortyapi.com/api/character/?page=19")
                .then(response => response.json())
                .then(({ results, info }) => {return { results } })
                .catch(() => {return [] })
    return res;
  }
  
  async function consoleCharacters(){
    const resp = await getCharacters();
    setCharacters(resp);
  }

  useEffect(() => {
    consoleCharacters();
  }, [])
  
  return (
    <div className="App">
      <header className='Header'>
        <img className='Logo' src="/logo.jpg" alt=""/>
        <h1 className='Terms'>  Terms + conditions</h1>
      </header>
      <div className='Hero'>
        <h1>
          rick and morty
        </h1>
        <h1>
          see all characters and more.
        </h1>
      </div>
      <main className='main'>
        <h1>character list</h1>
        <hr/>
        {
          (characters && characters.length > 0) && characters.map(character => 
          (<Characters character={character}/>))
          
        }
        
      </main>
      <footer>

      </footer>
    </div>
  );
}

export default App;
