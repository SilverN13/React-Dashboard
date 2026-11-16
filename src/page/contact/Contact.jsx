import { Box } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import React from 'react'
import { rows,columns } from './data'
import { GridToolbar } from '@mui/x-data-grid/internals'

function Contact() {
  return (
    <Box sx={{ height: 600, width: "100%", mx: "auto" }}>
      <DataGrid
    
        slots={{ toolbar: GridToolbar }}
        showToolbar
        rows={rows}
        // @ts-ignore
        columns={columns}
      />
    </Box>
  )
}

export default Contact