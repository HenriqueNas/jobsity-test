import AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_KEY = "@jobsity";

export async function setItem(key: string, value: any) {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(`${STORAGE_KEY}:${key}`, jsonValue);
  } catch (_) {}
}

export async function getItem(key: string) {
  try {
    const value = await AsyncStorage.getItem(`${STORAGE_KEY}:${key}`);
    const jsonValue = JSON.parse(value) || value;

    return jsonValue;
  } catch (_) {}
}

export async function removeItem(key: string) {
  try {
    await AsyncStorage.removeItem(`${STORAGE_KEY}:${key}`);
  } catch (_) {}
}
