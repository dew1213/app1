import React from "react";
import Calendar from "./class-components";
import Button from "./class-components2";
import { Header,Content,Footer } from "./func-components";
import { Calculator } from "./calculator";
import {EventData} from "./event-data";
import RefClass from "./refs-func";
import MessageBox from "./state-func";
import { userContext } from "./context";
import Header2 from "./context-header2";
import Content2 from "./context-content2";

 function App(){
  let [user,setUser] = React.useState('')
    return(
      <userContext.Provider value={[user,setUser]}>
        <Header2/>
        <Content2/>
      </userContext.Provider>


      /*<>
      
      <Calculator/>
      <EventData/>
      <RefClass/>
      <MessageBox/>
      </>*/
    )
}
export default App;