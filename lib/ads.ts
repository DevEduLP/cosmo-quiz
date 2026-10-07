// lib/ads.ts — versão web (sem anúncios). O Android/iOS usam lib/ads.native.ts.
export async function initAds() {}

export function registerRoundFinished() {}

export function showAdThen(next: () => void) {
  next();
}
