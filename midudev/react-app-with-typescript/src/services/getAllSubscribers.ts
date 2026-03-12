// Hello, TypeScript! @jdomingu19
// React & TypeScript App by @midudev (2022)
// src/services/getAllSubscribers.tsx

// 1. Import axios library and subscriber types
import axios from "axios";
import { SubscriberInterface, SubscribersResponseFromAPIType } from "../types";

// 2. Public function to get all subscribers by fetching and mapping API response
export const getAllSubscribers = () => {
  return fetchSubscribers().then(mapFromAPIToSubscribers);
};

// 3. MiduDev's Twitch Subscribers API request
// It is recommended not to use fetch directly inside a component
// From here you could apply Clean Architecture or Hexagonal Architecture
const fetchSubscribers = async (): Promise<SubscribersResponseFromAPIType> => {
  const res = await axios.get<SubscribersResponseFromAPIType>(
    "http://localhost:3001/subs",
  );
  return res.data;
};

// 4. Map API response fields to local SubscriberInterface structure
const mapFromAPIToSubscribers = (
  apiResponse: SubscribersResponseFromAPIType,
): Array<SubscriberInterface> => {
  return apiResponse.map((subscriberFromAPI) => {
    const {
      nick,
      months: subscriptionMonths,
      profileUrl: avatar,
      description,
    } = subscriberFromAPI;

    return {
      nick,
      subscriptionMonths,
      avatar,
      description,
    };
  });
};
