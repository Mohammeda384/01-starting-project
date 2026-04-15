
import componentsImg from './assets/components.png';
import { CORE_CONCEPTS } from './data';
import Header from './Components/header';
import CoreConcept from './Components/CoreConcepts';
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
    <div>
      <Header />
      <main>

        <section id="core-concepts">
          <h2>Time to get started!</h2>
          <ul>
            {/* spread the object into its attributes */}
            <CoreConcept
              {...CORE_CONCEPTS[0]} /> 
            <CoreConcept
              {...CORE_CONCEPTS[1]} />
            <CoreConcept
              {...CORE_CONCEPTS[2]} />
            <CoreConcept
              {...CORE_CONCEPTS[3]} />
          </ul>
        </section>

      </main>

    </div>
  );
}

export default App;
