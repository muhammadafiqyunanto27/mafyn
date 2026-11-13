export const THEME_STORAGE_KEY = "mafyn-theme";
export const THEME_CHANGE_EVENT = "mafyn-theme-change";

export const themePreferences = ["light", "dark", "system"] as const;

export type ThemePreference = (typeof themePreferences)[number];

export function isThemePreference(value: string | null): value is ThemePreference {
  return value === "light" || value === "dark" || value === "system";
}

/**
 * Runs before first paint. The markup is server-rendered without a theme, so
 * this script sets the resolved theme and the saved preference on <html>
 * before the browser can paint the wrong colours.
 */
export const themeScript = `(function(){try{var key="${THEME_STORAGE_KEY}";var stored=window.localStorage.getItem(key);var preference=stored==="light"||stored==="dark"||stored==="system"?stored:"system";var dark=preference==="dark"||(preference==="system"&&window.matchMedia("(prefers-color-scheme: dark)").matches);var root=document.documentElement;root.dataset.theme=dark?"dark":"light";root.dataset.themePreference=preference;root.style.colorScheme=dark?"dark":"light";}catch(error){document.documentElement.dataset.theme="light";document.documentElement.dataset.themePreference="system";document.documentElement.style.colorScheme="light";}})();`;
