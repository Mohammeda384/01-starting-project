
import componentsImg from './assets/components.png';
import { CORE_CONCEPTS, EXAMPLES } from './data';
import Header from './Components/Header/header';
import CoreConcept from './Components/CoreConcepts/CoreConcept';
import TabButton from './TabButton/TabButton';
import {Fragment, useState} from 'react'; 
import CoreConcepts from './Components/CoreConcepts/CoreConcepts';
import TabButtons from './TabButton/TabButtons';
// function UserData(){
//   const user = {first:"George", last: "Salayka", age:"40"};

//   return (
//     <div>
//       <h2>Name: {user.last}, {user.first}</h2>
//       <h3>Age: {user.age}</h3>
//     </div>
//   )
// }


function App() {
  //left is a variable, right is a function that changes the left variable
  const [selectedTopic, setSeletectedTopic] = useState()
  let tabContent = "Please click a button!"
  function handleSelect(selectedButton){
    setSeletectedTopic(selectedButton)
    console.log(selectedTopic)
  }
    if(selectedTopic){
      tabContent = (
        <div id ="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>
                {EXAMPLES[selectedTopic].code}
              </code>
            </pre>
        </div>
      )
    
  }
  
  return (
    <>
      <Header />
      <main>

        <CoreConcepts/>
        <TabButtons selectedTopic = {selectedTopic} tabContent = {tabContent} handleSelect ={handleSelect}/> 
      </main>
    
    </>
  );
}

export default App;
