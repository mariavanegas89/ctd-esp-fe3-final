import React from 'react'
import Card from '../Components/Card'
import { useContextGlobal } from '../Components/utils/global.context';
import '../Styles/Home.Route.css';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const { state } = useContextGlobal();

  return (
    <main className='home-container' >
      <h1>Home</h1>
      {/* Si hay dentistas en el state, renderizamos el componente Card para cada uno de ellos */}
      {state.dentists?.length > 0 && (
        <>
          {state.dentists.map((dentist) => (
            <Card key={dentist.id} dentist={dentist} />
          ))}
        </>
      )}
      {!state.dentists?.length && <p>Loading dentists...</p>}
    </main>
  )
}

export default Home