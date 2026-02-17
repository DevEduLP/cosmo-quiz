// lib/settings.tsx
import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

type Settings = {
  haptics: boolean;
};

const STORAGE_KEY = "@cosmoquiz:settings-v1";
const DEFAULTS: Settings = { haptics: true };

type Ctx = {
  cfg: Settings;
  setCfg: (next: Partial<Settings>) => Promise<void>;
  loaded: boolean;
};

const SettingsContext = React.createContext<Ctx>({
  cfg: DEFAULTS,
  setCfg: async () => {},
  loaded: false,
});

export function SettingsProvider({ children }: { children: React.ReactNode }) {
  const [cfg, setCfgState] = React.useState<Settings>(DEFAULTS);
  const [loaded, setLoaded] = React.useState(false);

  React.useEffect(() => {
    (async () => {
      try {
        const raw = await AsyncStorage.getItem(STORAGE_KEY);
        if (raw) {
          setCfgState({ ...DEFAULTS, ...JSON.parse(raw) });
        }
      } catch {}
      setLoaded(true);
    })();
  }, []);

  const setCfg = React.useCallback(
    async (next: Partial<Settings>) => {
      const merged = { ...cfg, ...next };
      setCfgState(merged);
      try {
        await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(merged));
      } catch {}
    },
    [cfg]
  );

  return (
    <SettingsContext.Provider value={{ cfg, setCfg, loaded }}>
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettings() {
  return React.useContext(SettingsContext);
}
