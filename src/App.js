import { Theme } from "@fullcalendar/core/internal";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Dashboard from "./scenes/dashboard";
import Form from "./scenes/form";
import Bar from "./scenes/bar";
import LogInOut from "./scenes/loginout";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import Sidebar from "./scenes/global/Sidebar";

function App() {

 const [theme, colorMode] = useMode();

 return(

 <ColorModeContext.Provider value = {colorMode}>
 
  <ThemeProvider theme={theme}>
   <CssBaseline />
   <div className='app'>
   <Sidebar />
     <main className="content">
      <Topbar/>
      <Routes>
      <Route path="/" element={<Dashboard />} />
        <Route path="/loginout" element={<LogInOut />} />
        <Route path="/form" element={<Form />} />
        <Route path="/bar" element={<Bar />} />
        <Route path="/pie" element={<Pie />} />
        <Route path="/line" element={<Line />} />
      
      </Routes>
     </main> 
   </div>;
  </ThemeProvider>
 </ColorModeContext.Provider>
 );
 
}

export default App;
