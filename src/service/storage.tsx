import { MMKV } from 'react-native-mmkv';

// Initialize MMKV with better error handling
let storage: MMKV;

try {
  storage = new MMKV({
    id: 'bus-booking-storage',
    encryptionKey: 'bus-booking-key-2025'
  });
} catch (error) {
  console.error('MMKV initialization failed:', error);
  // Fallback to default MMKV instance
  storage = new MMKV();
}

// Helper function for safe storage operations
const safeStorageOperation = <T>(operation: () => T, fallback: T): T => {
  try {
    return operation();
  } catch (error) {
    console.error('Storage operation failed:', error);
    return fallback;
  }
};

// Access Token
export const setAccessToken = (token: string) => {
  safeStorageOperation(() => storage.set('accessToken', token), undefined);
};

export const getAccessToken = (): string | undefined => {
  return safeStorageOperation(() => storage.getString('accessToken'), undefined);
};

export const removeAccessToken = () => {
  safeStorageOperation(() => storage.delete('accessToken'), undefined);
};

// Refresh Token
export const setRefreshToken = (token: string) => {
  safeStorageOperation(() => storage.set('refreshToken', token), undefined);
};

export const getRefreshToken = (): string | undefined => {
  return safeStorageOperation(() => storage.getString('refreshToken'), undefined);
};

export const removeRefreshToken = () => {
  safeStorageOperation(() => storage.delete('refreshToken'), undefined);
};

// Guest Session Handling - Optimized for faster access
export const setGuestSession = () => {
  safeStorageOperation(() => storage.set('isGuest', true), undefined);
};

export const isGuestSession = (): boolean => {
  return safeStorageOperation(() => storage.getBoolean('isGuest'), false) || false;
};

export const clearGuestSession = () => {
  safeStorageOperation(() => storage.delete('isGuest'), undefined);
};

// Guest Info Storage - Optimized with JSON storage
export const setGuestInfo = (name: string, email: string) => {
  const guestInfo = { name, email, timestamp: Date.now() };
  safeStorageOperation(() => storage.set('guestInfo', JSON.stringify(guestInfo)), undefined);
};

export const getGuestInfo = (): { name?: string; email?: string } => {
  const guestInfoStr = safeStorageOperation(() => storage.getString('guestInfo'), null);
  if (guestInfoStr) {
    try {
      const parsed = JSON.parse(guestInfoStr);
      return { name: parsed.name, email: parsed.email };
    } catch (error) {
      console.error('Failed to parse guest info:', error);
    }
  }
  return {};
};

export const clearGuestInfo = () => {
  safeStorageOperation(() => storage.delete('guestInfo'), undefined);
};

// Add a function to check storage health
export const checkStorageHealth = (): boolean => {
  try {
    const testKey = 'health_check';
    const testValue = 'ok';
    storage.set(testKey, testValue);
    const retrieved = storage.getString(testKey);
    storage.delete(testKey);
    return retrieved === testValue;
  } catch (error) {
    console.error('Storage health check failed:', error);
    return false;
  }
};

export { storage };