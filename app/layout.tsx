import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";

// app/layout.tsx
export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" >
        <body suppressHydrationWarning={true}>
          <AppRouterCacheProvider>
            {children}
          </AppRouterCacheProvider>
        </body>
      </html>
    );
}