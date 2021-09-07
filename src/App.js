import 'bootstrap/dist/css/bootstrap.min.css';

import {MovieGrid } from './MovieGrid'
import data from "./data.json"



function App() {
  
  
  return (
    <div className="App">
      <container>
        <header>
          <h1>Movier</h1>
        </header>
        <main>
        
        <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
            {data.map((d)=>{
                 return (
                 <MovieGrid 
                  data={d}
                   
                /> );
            })}
            
        
        </div>
  
                          
        </main>
      </container>
    </div>
  );
}

export default App;
