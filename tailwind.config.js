import withMT from "@material-tailwind/react/utils/withMT";
import aspectRatio from '@tailwindcss/aspect-ratio';

export default withMT({
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // Include the `app` directory for Next.js 13+ file structure
    "./components/**/*.{js,ts,jsx,tsx,mdx}", // Include custom components
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx,mdx}", // Material Tailwind components
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx,mdx}", // Material Tailwind theme
    "./public/index.html",
  ],
  theme: {
    extend: {
      backgroundImage: {
        // 'figma': "url('img/figma.png')",
        'figma1': "url('/img/figma1.png')",
        'hero': "url('/img/wed.jpg')"
      },
      screens: {
        // 'sm': '640px',
        'md': '855px',
        // 'lg': '1024px',
        // 'xl': '1280px',
        // '2xl': '1536px',
      },
    },
  },
  plugins: [
    aspectRatio
  ],
});

// const config = {
//   content: [
//     "./app/**/*.{js,ts,jsx,tsx,mdx}", // Include the `app` directory for Next.js 13+ file structure
//     "./components/**/*.{js,ts,jsx,tsx,mdx}", // Include custom components
//     "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx,mdx}", // Material Tailwind components
//     "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx,mdx}", // Material Tailwind theme
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],

// }

// module.exports = withMT(config);

