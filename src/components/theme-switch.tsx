"use client";

import { useCallback, useEffect, useSyncExternalStore } from "react";
import { Monitor, Moon, Sun, type LucideIcon } from "lucide-react";
import {
  THEME_CHANGE_EVENT,
  THEME_STORAGE_KEY,
  isThemePreference,
  type ThemePreference,
} from "@/lib/theme";

type ThemeSwitchProps = {
  labels: {
    label: string;
    light: string;
    dark: string;
    system: string;
  };
  variant?: "compact" | "expanded";
};

const options: {
  value: ThemePreference;
  icon: LucideIcon;
  labelKey: "light" | "dark" | "system";
}[] = [
  { value: "light", icon: Sun, labelKey: "light" },
  { value: "dark", icon: Moon, labelKey: "dark" },
  { value: "system", icon: Monitor, labelKey: "system" },
];

function readPreference(): ThemePreference {
  try {
    const stored = window.localStorage.getItem(THEME_STORAGE_KEY);
    return isThemePreference(stored) ? stored : "system";
  } catch {
    return "system";
  }
}

function applyPreference(preference: ThemePreference) {
  const dark =
    preference === "dark" ||
    (preference === "system" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches);
  const resolved = dark ? "dark" : "light";
  const root = document.documentElement;

  root.dataset.theme = resolved;
  root.dataset.themePreference = preference;
  root.style.colorScheme = resolved;

  document
    .querySelectorAll('meta[name="theme-color"]')
    .forEach((meta) =>
      meta.setAttribute("content", dark ? "#111318" : "#F4F4F2"),
    );
}

function subscribe(onChange: () => void) {
  const onStorage = (event: StorageEvent) => {
    if (event.key === THEME_STORAGE_KEY) onChange();
  };

  window.addEventListener(THEME_CHANGE_EVENT, onChange);
  window.addEventListener("storage", onStorage);

  return () => {
    window.removeEventListener(THEME_CHANGE_EVENT, onChange);
    window.removeEventListener("storage", onStorage);
  };
}

function getServerPreference(): ThemePreference {
  return "system";
}

function getMountedSnapshot() {
  return true;
}

function getServerMountedSnapshot() {
  return false;
}

export function ThemeSwitch({ labels, variant = "compact" }: ThemeSwitchProps) {
  const preference = useSyncExternalStore(
    subscribe,
    readPreference,
    getServerPreference,
  );
  const mounted = useSyncExternalStore(
    subscribe,
    getMountedSnapshot,
    getServerMountedSnapshot,
  );

  useEffect(() => {
    applyPreference(preference);

    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const onSystemChange = () => {
      if (readPreference() === "system") applyPreference("system");
    };

    media.addEventListener("change", onSystemChange);
    return () => media.removeEventListener("change", onSystemChange);
  }, [preference]);

  const choose = useCallback((next: ThemePreference) => {
    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, next);
    } catch {
      // Storage can be unavailable in private or restricted contexts.
    }
    applyPreference(next);
    window.dispatchEvent(new Event(THEME_CHANGE_EVENT));
  }, []);

  const expanded = variant === "expanded";

  return (
    <div
      role="group"
      aria-label={labels.label}
      className={`flex border border-fg/20 ${expanded ? "w-full" : ""}`}
    >
      {options.map(({ value, icon: Icon, labelKey }) => {
        const active = mounted && preference === value;

        return (
          <button
            key={value}
            type="button"
            onClick={() => choose(value)}
            aria-pressed={mounted ? active : undefined}
            title={labels[labelKey]}
            className={`flex items-center justify-center gap-1.5 transition-colors duration-150 ${
              active
                ? "bg-fg text-canvas"
                : "text-fg/55 hover:bg-fg/10 hover:text-fg"
            } ${
              expanded
                ? "h-11 flex-1 px-3 text-[0.6875rem] font-medium"
                : "h-9 w-9"
            }`}
          >
            <Icon
              aria-hidden="true"
              className="h-4 w-4 shrink-0"
              strokeWidth={1.6}
            />
            {expanded ? (
              <span>{labels[labelKey]}</span>
            ) : (
              <span className="sr-only">{labels[labelKey]}</span>
            )}
          </button>
        );
      })}
    </div>
  );
}
