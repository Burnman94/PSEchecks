import { Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import Grid from './Grid';
import GridMap from './GridMapPse';


//make functions to get each data point
//make a function that handles all objects the same
//create maps for complicated data
function Checkdata({check, index}) {


let {columns, rows} = GridMap(check)
  return (
    <div key={index}>

     {<Grid columns={columns} rows={rows}/>} 
      
    </div>
  );
}

export default Checkdata;