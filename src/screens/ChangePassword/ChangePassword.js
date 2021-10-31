import React from 'react'
import ReactDOM from 'react-dom'
import CssBaseline from '@mui/material/CssBaseline'
import Typography from '@mui/material/Typography'
//import { ThemeProvider } from '@mui/material/styles';
import { ThemeProvider, createMuiTheme, makeStyles } from '@mui/material/styles';

import FormPasswordReset from './Components/FormPasswordReset'
import './ChangPasswordstyles.css'

const theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
})

function ChangePassword() {
  return (
    <div className="App">
      <Typography variant="title" style={{ margin: '16px 0' }}>
        React Password Reset
      </Typography>
      <FormPasswordReset />
    </div>
  )
}

export default ChangePassword;

// const rootElement = document.getElementById('root')
// ReactDOM.render(
//   <ThemeProvider theme={theme}>
//     <CssBaseline>
//       <App />
//     </CssBaseline>
//   </ThemeProvider>,
//   rootElement
// )
