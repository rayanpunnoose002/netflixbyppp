
import React from 'react'
import Banner from './components/Banner/Banner'
import Navbar from './components/Navbar'
import './App.css'
import Rowpost from './components/RowPost/RowPost'

import {Orginals,Action, comedy, horror, romantic} from './urls'

function App() {
  return (
    <div className="App">
       <Navbar/>
       <Banner/>
       <Rowpost  title='Netflix Orginals' url={Orginals} />
       <Rowpost  title='Action' isSmall url={Action} />
       <Rowpost  title='Comedy Movies' isSmall url={comedy} />
       <Rowpost  title='Horror Movies' isSmall url={horror} />
       <Rowpost  title='Romantic Movies' isSmall url={romantic} />


    </div>
  );
}

export default App;
