// Hello, TypeScript! @jdomingu19
// Intensive Course by @midudev (2023)
// 037 Simulating useState with Tuples

// 1. Define tuple type for state
type State = [string, (newName: string) => void];

// 2. Function returning tuple
function useState(initialName: string): State {
  let state = initialName;

  const setState = (newName: string) => {
    state = newName;
    console.log(`Simulated useState: ${state}`);
  };

  return [state, setState];
}

// 3. Destructure tuple into value and setter
const [hero, setHero]: State = useState("Link");

// 4. Log initial state
console.log(hero); // Link

// 5. Update state using setter
setHero("Zelda"); // Simulated useState: Zelda
