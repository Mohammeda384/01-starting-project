
import componentsImg from './assets/components.png';
import { CORE_CONCEPTS, EXAMPLES } from './data';
import Header from './Components/Header/header';
import CoreConcept from './Components/CoreConcepts/CoreConcept';
import TabButton from './TabButton/TabButton';
import { Fragment, useState } from 'react';
import CoreConcepts from './Components/CoreConcepts/CoreConcepts';
import Examples from './TabButton/Examples';
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



  return (
    <>
      <Header />
      <main>

        <CoreConcepts />
        <Examples />
      </main>

    </>
  );
}

export default App;
