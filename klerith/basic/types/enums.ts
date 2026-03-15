// Hello, TypeScript! @jdomingu19
// Udemy Course by @klerith (2026)
// types/enums.ts

// Immediately Invoked Function Expression (IIFE)
// - Helps avoid conflicts with variable, constant, and function names
// - Creates a local scope that isolates code execution
// - Commonly used to initialize logic immediately without polluting the global scope
(() => {
  // --- Class 21: Enums ---

  // 1. Numeric enum with auto-increment
  // - Values start at 0 by default
  // - Each member increments by 1
  // - On editor hover => enum AudioLevel
  enum AudioLevel {
    minimum,
    medium,
    maximum,
  }

  console.log(AudioLevel); // { 0: 'minimum', 1: 'medium', 2: 'maximum', minimum: 0, medium: 1, maximum: 2 }
  console.log({ AudioLevel }); // { AudioLevel: { 0: 'minimum', 1: 'medium', 2: 'maximum', minimum: 0, medium: 1, maximum: 2 } }
  console.log(typeof AudioLevel); // object

  // Using enum values
  let currentAudioLevel = AudioLevel.medium;

  console.log({ currentAudioLevel }); // { currentAudioLevel: 1 }
  console.log(typeof currentAudioLevel); // number

  // Typed variable restricted to enum members
  let typedCurrentAudioLevel: AudioLevel = AudioLevel.minimum; // Ok (0)
  typedCurrentAudioLevel = AudioLevel.medium; // Ok (1)
  typedCurrentAudioLevel = AudioLevel.maximum; // Ok (2)

  // Direct assignment with numeric values is allowed
  typedCurrentAudioLevel = 0; // Ok (0)
  typedCurrentAudioLevel = 1; // Ok (1)
  typedCurrentAudioLevel = 2; // Ok (2)

  // Error: Type '"0"' is not assignable to type 'AudioLevel'.
  // typedCurrentAudioLevel = "0";

  // Error: Type '"1"' is not assignable to type 'AudioLevel'.
  // typedCurrentAudioLevel = "1";

  // Error: Type '"2"' is not assignable to type 'AudioLevel'.
  // typedCurrentAudioLevel = "2";

  // Error: Type '3' is not assignable to type 'AudioLevel'.
  // typedCurrentAudioLevel = 3;

  // 2. Numeric enum with custom values
  // - Members can be assigned explicit numbers
  // - On editor hover => enum AudioLevel
  enum AudioLevel2 {
    minimum = 0,
    medium = 50,
    maximum = 100,
  }

  console.log(AudioLevel2); // { 0: 'minimum', 50: 'medium', 100: 'maximum', minimum: 0, medium: 50, maximum: 100 }
  console.log({ AudioLevel2 }); // { AudioLevel2: { 0: 'minimum', 50: 'medium', 100: 'maximum', minimum: 0, medium: 50, maximum: 100 } }
  console.log(typeof AudioLevel2); // object

  // Using enum values
  let currentAudioLevel2 = AudioLevel2.medium;

  console.log({ currentAudioLevel2 }); // { currentAudioLevel2: 50 }
  console.log(typeof currentAudioLevel2); // number

  // Typed variable restricted to enum members
  let typedCurrentAudioLevel2: AudioLevel2 = AudioLevel2.minimum; // Ok (0)
  typedCurrentAudioLevel2 = AudioLevel2.medium; // Ok (50)
  typedCurrentAudioLevel2 = AudioLevel2.maximum; // Ok (100)

  // Direct assignment with numeric values is allowed
  typedCurrentAudioLevel2 = 0; // Ok (0)
  typedCurrentAudioLevel2 = 50; // Ok (50)
  typedCurrentAudioLevel2 = 100; // Ok (100)

  // Error: Type '"0"' is not assignable to type 'AudioLevel2'.
  // typedCurrentAudioLevel2 = "0";

  // Error: Type '"50"' is not assignable to type 'AudioLevel2'.
  // typedCurrentAudioLevel2 = "50";

  // Error: Type '"100"' is not assignable to type 'AudioLevel2'.
  // typedCurrentAudioLevel2 = "100";

  // Error: Type '150' is not assignable to type 'AudioLevel2'.
  // typedCurrentAudioLevel2 = 150;

  // 3. Mixed enum with auto-increment and custom values
  // - First member assigned 0
  // - Second member auto-increments to 1
  // - Third member explicitly set to 100
  // - On editor hover => enum AudioLevel
  enum AudioLevel3 {
    minimum = 0,
    medium,
    maximum = 100,
  }

  console.log(AudioLevel3); // { 0: 'minimum', 1: 'medium', 100: 'maximum', minimum: 0, medium: 1, maximum: 100 }
  console.log({ AudioLevel3 }); // { AudioLevel3: { 0: 'minimum', 1: 'medium', 100: 'maximum', minimum: 0, medium: 1, maximum: 100 } }
  console.log(typeof AudioLevel3); // object

  // Using enum values
  let currentAudioLevel3 = AudioLevel3.medium;

  console.log({ currentAudioLevel3 }); // { currentAudioLevel3: 1 }
  console.log(typeof currentAudioLevel3); // number

  // Typed variable restricted to enum members
  let typedCurrentAudioLevel3: AudioLevel3 = AudioLevel3.minimum; // Ok (0)
  typedCurrentAudioLevel3 = AudioLevel3.medium; // Ok (1)
  typedCurrentAudioLevel3 = AudioLevel3.maximum; // Ok (100)

  // Direct assignment with numeric values is allowed
  typedCurrentAudioLevel3 = 0; // Ok (0)
  typedCurrentAudioLevel3 = 1; // Ok (1)
  typedCurrentAudioLevel3 = 100; // Ok (100)

  // Error: Type '"0"' is not assignable to type 'AudioLevel3'.
  // typedCurrentAudioLevel3 = "0";

  // Error: Type '"1"' is not assignable to type 'AudioLevel3'.
  // typedCurrentAudioLevel3 = "1";

  // Error: Type '"100"' is not assignable to type 'AudioLevel3'.
  // typedCurrentAudioLevel3 = "100";

  // Error: Type '150' is not assignable to type 'AudioLevel3'.
  // typedCurrentAudioLevel3 = 150;
})();
