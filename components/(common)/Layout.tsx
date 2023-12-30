import type { RouteLocale } from "next-roots";
import type { PropsWithChildren, ReactNode } from "react";
import Nav from "./Nav";

import Link from "next/link";
import "@styles/index.css";
import { getContactsHref, getHomeHref } from "@server/router";
import { getDictionary } from "@server/utils/getDictionary";
import Footer from "./Footer";
import { Metadata } from "next";

type RootLayoutProps = PropsWithChildren<{
  locale: RouteLocale;
  modal: ReactNode;
}>;

async function getNavigation(locale: string) {
  const t = await getDictionary(locale);
  console.log(locale);
  return [
    { name: t("nav.Home"), href: getHomeHref(locale) },
    // { name: t('nav.About'), href: getAboutHref(locale) },
    { name: t("nav.Contacts"), href: getContactsHref(locale) },
  ];
}

export const metadata: Metadata = {
  title: {
    template: "%s | Szalikomania",
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

/**
 * Root layout is meant to be used as top level layout for all routes.
 * That means it should be used only in /en/layout.ts, /es/layout.ts, /cs/layout.ts
 *
 * @param param0
 * @returns
 */
export async function Layout({ children, modal, locale }: RootLayoutProps) {
  const navigation = await getNavigation(locale);

  return (
    <html lang={locale} className="bg-black antialiased">
      <body className="">
        <div className="">
          <Nav items={navigation} />
          <main className="">{children}</main>
          <footer className="">
            <Footer />
          </footer>
          {modal}
        </div>
      </body>
    </html>
  );
}
