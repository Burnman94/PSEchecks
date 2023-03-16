import { data } from './data';
import Checkdata from './Checkdata';
import GridMapPse from './GridMapPse';
import Grid from './Grid';


function App() {
//console.log(data);
  return (
    <div className="App">
      {data.map((check, index) => {
        //console.log(check)
          return (<Grid check={check}/>)
      })}
      
    </div>
  );
}

export default App;
