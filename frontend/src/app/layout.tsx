import "./globals.css";
import Providers from "../../config/providers";
import * as api from "@/lib/api";
import SiteHeader from "@/components/site-header";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const categories = await api.getAllCategories();

  return (
    <html lang="en">
      <body>
        <Providers>
          <SiteHeader categories={categories.data ?? []} />
          {children}
        </Providers>
      </body>
    </html>
  );
}
