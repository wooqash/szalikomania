import {
  Inter,
  Archivo_Black,
  Ultra,
  Yeseva_One,
  Josefin_Sans,
} from "next/font/google";

export const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
export const ultra = Ultra({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-ultra",
});
export const archivo_black = Archivo_Black({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-archivo-black",
});
export const yeseva_one = Yeseva_One({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-yeseva-one",
});
export const josefin_sans = Josefin_Sans({
  weight: ["200", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-josefin-sans",
});
