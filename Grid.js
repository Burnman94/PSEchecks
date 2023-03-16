import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import GridMapPse from './GridMapPse';


export default function Grid({check}) {
  //console.log('grid check',check);
  let gridmap = GridMapPse(check);
  console.log('gridmap', gridmap);
  //does data exist. If not render null

  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <h1>{check.name}</h1>
      {
        check.data ? 
        <DataGrid
        rows={gridmap.rows}
        columns={gridmap.columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
      : null
      }

    </Box>
  );
}
