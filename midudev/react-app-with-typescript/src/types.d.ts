// Hello, TypeScript! @jdomingu19
// React & TypeScript App by @midudev (2022)
// src/types.d.ts

// Keep type definitions separated from business logic outside components

// 1. Interface describing the structure of a subscriber entity
export interface SubscriberInterface {
  nick: string;
  subscriptionMonths: number;
  avatar: string;
  description?: string;
}

// 2. Type representing the raw API response format for subscribers
export type SubscribersResponseFromAPIType = Array<{
  nick: string;
  months: number;
  profileUrl: string;
  description: string;
}>;
