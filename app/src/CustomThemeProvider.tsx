"use client";

// import { ThemeProvider } from "@material-tailwind/react";

export default function CustomThemeProvider({
  children}: {
  children: React.ReactNode;
}) {
  console.log('ThemeProviderWrapper rendered');
  return (
      {children}
      )
}
