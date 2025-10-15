
import "./globals.css";
import { SessionProvider } from "next-auth/react";
import { Providers } from "./provider";  // 👈 import the client wrapper


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
    <Providers>{children}</Providers>

      </body>
    </html>
  );
}
