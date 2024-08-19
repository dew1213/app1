import React from "react";
import Calendar from "./class-components";
import Button from "./class-components2";
import { Header,Content,Footer } from "./func-components";
import { Calculator } from "./calculator";
import {EventData} from "./event-data";
import RefClass from "./refs-func";
import MessageBox from "./state-func";

 function App(){
    return(
      <>
      <Button/>
      <Calculator/>
      <EventData/>
      <RefClass/>
      <MessageBox/>
      
      {/*  <Header/>
       <Content/>
       <Footer/> */}
      </>
    )
}
export default App;