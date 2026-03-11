// Hello, TypeScript! @jdomingu19
// React & TypeScript App by @midudev (2022)
// src/types.d.ts

// . ?
// Es aconsejable separar los types de la lógica de negocio fuera de los componentes
export interface SubscriberInterface {
  nick: string;
  subscriptionMonths: number;
  avatar: string;
  description?: string;
}
