import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // Include the `app` directory for Next.js 13+ file structure
    "./components/**/*.{js,ts,jsx,tsx,mdx}", // Include custom components
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx,mdx}", // Material Tailwind components
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx,mdx}", // Material Tailwind theme
  ],
  theme: {
    extend: {
      backgroundImage: {
        // 'figma': "url('img/figma.png')",
        'figma1': "url('/img/figma1.png')",
        'hero': "url('/img/wed.jpg')"
      },
    },
  },
  plugins: [],
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

