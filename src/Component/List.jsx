import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios'

const columns = [
    { field: "id", headerName: "ID", width: 150 },
    { field: "Login", headerName: "Login", width: 150 },
    { field: "avatar_url", headerName: "avatar_url", width: 150 },
    { field: "html_url", headerName: "html_url", width: 150 },
    { field: "type", headerName: "type", width: 150 },
];


export default function List() {

  const [Data, setData] = React.useState([]);

  React.useEffect(() => {
    const getData = async () => {
       const data = await axios.get('https://hiring.bajajfinservhealth.in/api/renderMe')
       setData(data.data)
    }
    getData()
  }, []);

  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={Data}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </Box>
  );
}
