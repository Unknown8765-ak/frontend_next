import "./globals.css";
import Providers from "./providers";
import LocalBusinessSchema from "@/components/seo/LocalBusinessSchema";
import OrganizationSchema from "@/components/seo/OrganizationSchema";

const SITE_URL =
  process.env.SITE_URL || "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "Sun & Shadow",
    template: "%s | Sun & Shadow",
  },

  description:
    "Sun & Shadow provides professional solar, aquarium and digital agency solutions.",

  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <OrganizationSchema />
        <LocalBusinessSchema />

        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}