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
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        'figma1': "url('/img/figma1.png')",
        'hero': "url('/img/wed.jpg')"
      },
    },
  },
  plugins: [aspectRatio],
} satisfies Config;
export default withMT(config);
