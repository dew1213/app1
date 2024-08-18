import React from "react";
import Calendar from "./class-components";
import Button from "./class-components2";
import { Header,Content,Footer } from "./func-components";
import { Calculator } from "./calculator";
import {EventData} from "./event-data";

 function App(){
    return(
      <>
      <Button/>
      <Calculator/>
      <EventData/>
      
      {/*  <Header/>
       <Content/>
       <Footer/> */}
      </>
    )
}
export default App;