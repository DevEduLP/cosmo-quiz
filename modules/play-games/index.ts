// modules/play-games — ponte JS para o Play Games (só existe no Android, fora do Expo Go).
import { requireOptionalNativeModule } from "expo";

type PlayGamesNative = {
  isConfigured(): boolean;
  isAuthenticated(): Promise<boolean>;
  signIn(): Promise<boolean>;
  unlock(id: string): void;
  setSteps(id: string, steps: number): void;
  showAchievements(): Promise<boolean>;
};

// null no web, no iOS e no Expo Go
export default requireOptionalNativeModule<PlayGamesNative>("PlayGames");
