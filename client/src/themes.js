export const tokensDark = {
  grey: {
    0: "#ffffff",
    10: "#f8fafc",
    50: "#f1f5f9",
    100: "#e2e8f0",
    200: "#cbd5e1",
    300: "#94a3b8",
    400: "#64748b",
    500: "#475569",
    600: "#334155",
    700: "#000000",
    800: "#000000",
    900: "#000000",
    1000: "#000000"
  },
  primary: {
  100: "#d0d7ff",
  200: "#a2b3ff",
  300: "#738eff",
  400: "#456aff",
  500: "#183eff", // Ana koyu mavi
  600: "#1232cc",
  700: "#0d2599",
  800: "#071966",
  900: "#020d33"
},

  secondary: {
    // Vibrant indigo
    100: "#e0e7ff",
    200: "#c7d2fe",
    300: "#a5b4fc",
    400: "#818cf8",
    500: "#6366f1",  // Base color
    600: "#4f46e5",
    700: "#4338ca",
    800: "#3730a3",
    900: "#312e81"
  },
 success: {
  // Lacivert paleti
  100: "#d0d7ff",
  200: "#a2b3ff",
  300: "#738eff",
  400: "#456aff",
  500: "#183eff",  // Ana lacivert ton
  600: "#1232cc",
  700: "#0d2599",
  800: "#071966",
  900: "#020d33"
}

,
  warning: {
    // Amber
    100: "#fef3c7",
    200: "#fde68a",
    300: "#fcd34d",
    400: "#fbbf24",
    500: "#f59e0b",
    600: "#d97706",
    700: "#b45309",
    800: "#92400e",
    900: "#78350f"
  },
  error: {
    // Rose red
    100: "#ffe4e6",
    200: "#fecdd3",
    300: "#fda4af",
    400: "#fb7185",
    500: "#f43f5e",
    600: "#e11d48",
    700: "#be123c",
    800: "#9f1239",
    900: "#881337"
  }
};

// Reverse tokens function remains the same
function reverseTokens(tokensDark) {
  const reversedTokens = {};
  Object.entries(tokensDark).forEach(([key, val]) => {
    const keys = Object.keys(val);
    const values = Object.values(val);
    const length = keys.length;
    const reversedObj = {};
    for (let i = 0; i < length; i++) {
      reversedObj[keys[i]] = values[length - i - 1];
    }
    reversedTokens[key] = reversedObj;
  });
  return reversedTokens;
}

export const tokensLight = reverseTokens(tokensDark);

// Updated theme settings with new colors
export const themeSettings = (mode) => {
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            // Dark theme palette
            primary: {
              ...tokensDark.primary,
              main: tokensDark.primary[500],
              light: tokensDark.primary[400]
            },
            secondary: {
              ...tokensDark.secondary,
              main: tokensDark.secondary[500],
              light: tokensDark.secondary[400]
            },
            success: {
              ...tokensDark.success,
              main: tokensDark.success[500]
            },
            warning: {
              ...tokensDark.warning,
              main: tokensDark.warning[500]
            },
            error: {
              ...tokensDark.error,
              main: tokensDark.error[500]
            },
            neutral: {
              ...tokensDark.grey,
              main: tokensDark.grey[500]
            },
            background: {
              default: tokensDark.grey[800],
              alt: tokensDark.grey[700],
              paper: tokensDark.grey[900]
            }
          }
        : {
            // Light theme palette
            primary: {
              ...tokensLight.primary,
              main: tokensDark.primary[500],
              light: tokensDark.primary[400]
            },
            secondary: {
              ...tokensLight.secondary,
              main: tokensDark.secondary[500],
              light: tokensDark.secondary[400]
            },
            success: {
              ...tokensLight.success,
              main: tokensDark.success[500]
            },
            warning: {
              ...tokensLight.warning,
              main: tokensDark.warning[500]
            },
            error: {
              ...tokensLight.error,
              main: tokensDark.error[500]
            },
            neutral: {
              ...tokensLight.grey,
              main: tokensDark.grey[500]
            },
            background: {
              default: tokensDark.grey[50],
              alt: tokensDark.grey[100],
              paper: tokensDark.grey[0]
            }
          }),
    },
    typography: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 14,
      h1: {
        fontSize: 40,
        fontWeight: 700,
        lineHeight: 1.2
      },
      h2: {
        fontSize: 32,
        fontWeight: 700,
        lineHeight: 1.3
      },
      h3: {
        fontSize: 28,
        fontWeight: 600,
        lineHeight: 1.35
      },
      h4: {
        fontSize: 24,
        fontWeight: 600,
        lineHeight: 1.4
      },
      h5: {
        fontSize: 20,
        fontWeight: 500,
        lineHeight: 1.5
      },
      h6: {
        fontSize: 16,
        fontWeight: 500,
        lineHeight: 1.6
      },
      subtitle1: {
        fontSize: 16,
        fontWeight: 400
      },
      body1: {
        fontSize: 14,
        fontWeight: 400
      },
      button: {
        fontWeight: 500,
        textTransform: "none"
      }
    },
    shape: {
      borderRadius: 12
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            padding: "8px 16px",
            borderRadius: 8
          }
        }
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 16,
            boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
          }
        }
      }
    }
  };
};