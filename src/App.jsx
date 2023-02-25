import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import Country from './Pages/Country';

import { getCountriesThunk } from './store/slices/countries.slice';

function App() {

const dispatch=  useDispatch()
 
const {countries} = useSelector(state /*es el objeto que está en nuestra store y guarda todos los estados globales */=>state)

console.log(countries);

useEffect(() => {
 dispatch(getCountriesThunk()) /*No solamente se despachan las actions, sino que los thunks también */
}, [])


  return (
    <div className="App">
 <h1>Paises que hablan español</h1>
 <div className='box__countries'>
{
  countries?.map(country => (
    <Country 
      key={country.altSpellings[0]}
      country={country}
      />
  ))
}
 </div>
    </div>
  )
}

export default App


/*me quede en 1.16hs */
