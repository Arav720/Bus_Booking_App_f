// src/service/config.tsx

export const BASE_URL = 'https://bus-booking-server-713e.onrender.com';

/**
 * Returns the backend URL.
 * You can use this function throughout your app for API requests.
 */
export const getBaseUrl = async (): Promise<string> => {
  return BASE_URL;
};
