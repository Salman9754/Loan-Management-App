/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"], // Enabling dark mode based on a class
    content: [
      "./index.html",
      "./src/**/*.{js,jsx,ts,tsx}", // Ensures all React and JS files are included for purging unused CSS
    ],
    container: {
      center: true, // Centers the container by default
      padding: {
        DEFAULT: '1rem', // Default padding for smaller screens
        sm: '1.5rem',    // Padding for small screens (≥ 640px)
        lg: '2rem',      // Padding for large screens (≥ 1024px)
        xl: '3rem',      // Padding for extra large screens (≥ 1280px)
        '2xl': '4rem',   // Padding for 2xl screens (≥ 1536px)
      },
    },
    theme: {
      extend: {
        // Custom Border Radius Values
        borderRadius: {
          lg: 'var(--radius)', // Custom large border radius
          md: 'calc(var(--radius) - 2px)', // Custom medium border radius
          sm: 'calc(var(--radius) - 4px)', // Custom small border radius
        },
        // Custom Color Palette
        colors: {
          background: 'hsl(var(--background))',
          foreground: 'hsl(var(--foreground))',
          card: {
            DEFAULT: 'hsl(var(--card))',
            foreground: 'hsl(var(--card-foreground))',
          },
          popover: {
            DEFAULT: 'hsl(var(--popover))',
            foreground: 'hsl(var(--popover-foreground))',
          },
          primary: {
            DEFAULT: 'hsl(var(--primary))',
            foreground: 'hsl(var(--primary-foreground))',
          },
          secondary: {
            DEFAULT: 'hsl(var(--secondary))',
            foreground: 'hsl(var(--secondary-foreground))',
          },
          muted: {
            DEFAULT: 'hsl(var(--muted))',
            foreground: 'hsl(var(--muted-foreground))',
          },
          accent: {
            DEFAULT: 'hsl(var(--accent))',
            foreground: 'hsl(var(--accent-foreground))',
          },
          destructive: {
            DEFAULT: 'hsl(var(--destructive))',
            foreground: 'hsl(var(--destructive-foreground))',
          },
          border: 'hsl(var(--border))',
          input: 'hsl(var(--input))',
          ring: 'hsl(var(--ring))',
          chart: {
            '1': 'hsl(var(--chart-1))',
            '2': 'hsl(var(--chart-2))',
            '3': 'hsl(var(--chart-3))',
            '4': 'hsl(var(--chart-4))',
            '5': 'hsl(var(--chart-5))',
          },
        },
      },
    },
    plugins: [require("tailwindcss-animate")], // Adds animation utilities
  };
  