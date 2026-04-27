
import componentsImg from './assets/components.png';
import { CORE_CONCEPTS, EXAMPLES } from './data';
import Header from './Components/Header/header';
import CoreConcept from './Components/CoreConcepts/CoreConcepts';
import TabButton from './TabButton/TabButton';
import {useState} from 'react'; 
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
    <div>
      <Header />
      <main>

        <section id="core-concepts">
          <h2>Time to get started!</h2>
          <ul>
            
           {

            CORE_CONCEPTS.map((conceptItem) => <CoreConcept {...conceptItem}></CoreConcept>)
           } 

        
            </ul>
        </section>
      <section id = "examples">
        <h2> Examples</h2>
        <menu>
          <TabButton isSelected = {selectedTopic ==="components"} onSelect={()=>handleSelect("components")}>Components</TabButton>
           <TabButton isSelected = {selectedTopic ==="jsx"} onSelect={()=>handleSelect("jsx")}>JSX</TabButton>
            <TabButton isSelected = {selectedTopic ==="props"} onSelect={()=>handleSelect("props")}>Props</TabButton>
             <TabButton isSelected = {selectedTopic ==="state"} onSelect={()=>handleSelect("state")}>State</TabButton>
        </menu>
        {tabContent}
       
        
      </section>
      </main>
    
    </div>
  );
}

export default App;
