import type { Config } from "tailwindcss";
import withMT from "@material-tailwind/react/utils/withMT";
import aspectRatio from '@tailwindcss/aspect-ratio';

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      screens: {
        'lg-plus': '1056px', // Must come after 'lg'
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        darkRed: '#8b0000'
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],  // Set Poppins as the default font
        workSans: ['WorkSans', 'sans-serif'], // Custom font family
        samarKan :['Samarkan', 'sans-serif']
      },
      backgroundImage: {
        'figma': "url('/img/figma.png')",
        'figma1': "url('/img/figma1-1.png')",
        'hero': "url('/img/wed.jpg')",
        "costumize1":"url('/img/costumize1.png')"
      },
      backgroundSize: {
        'custom': '100% 100%', // Customize width here
        'custom-auto': '100% auto', // width auto-height
        'custom-half': '100% 75%', // half-width full-height
        // 'min-height': '75vh';
      },
      height: {
        'screen': '100vh',
        'full': '100%',
      },
      minHeight: {
        'screen': '100vh',
      }
    },
  },
  plugins: [aspectRatio],
} satisfies Config;
export default withMT(config);
