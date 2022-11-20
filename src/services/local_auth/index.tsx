import {
  hasHardwareAsync,
  isEnrolledAsync,
  authenticateAsync,
} from "expo-local-authentication";

export async function canUseLocalAuth() {
  const compatible = await hasHardwareAsync();
  const enrolled = await isEnrolledAsync();

  return compatible && enrolled;
}

export async function tryLocalAuth() {
  const result = await authenticateAsync();

  return result;
}
