import "@styles/index.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | Szalikomania 1",
    default: "Szalikomania",
  },
  metadataBase: new URL("https://szalikomania.pl"),
  description: "",
  openGraph: {
    url: "https://szalikomania.pl",
    title: {
      template: "%s | Szalikomania",
      default: "Szalikomania",
    },
    description: "",
    siteName: "Szalikomania",
    images: [
      {
        url: "https://nextjsconf-pics.vercel.app/og-image.png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Szalikomania",
    description: "",
    siteId: "1467726470533754880",
    creator: "@nextjs",
    creatorId: "1467726470533754880",
    images: ["https://nextjsconf-pics.vercel.app/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black antialiased">{children}</body>
    </html>
  );
}
