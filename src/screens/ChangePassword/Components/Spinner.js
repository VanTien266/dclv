import React from 'react'
import CircularProgress from '@mui/material/CircularProgress'
export default function Spinner() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <CircularProgress color="primary" />
    </div>
  )
}
