import { Router, schema } from "next-roots";

export const router = new Router(schema);

export function getLocales() {
  return schema.locales;
}

export function getPageLocale() {
  return router.getLocaleFromHref(Router.getPageHref());
}

export function getRouteNameFromHref(href: string) {
  if (!href) {
    return;
  }

  return router.getRouteFromHref(href);
}

export function getHomeHref(locale: string = getPageLocale()) {
  return router.getHref("/", { locale });
}

export function getPolishClubsHref(locale: string = getPageLocale()) {
  return router.getHref("/klubowe/polskie", { locale });
}

export function getWidzewLodzHref(locale: string = getPageLocale()) {
  return router.getHref("/klubowe/polskie/lodzkie/widzew-lodz", { locale });
}

export function getElanaTorunHref(locale: string = getPageLocale()) {
  return router.getHref("/klubowe/polskie/kujawsko-pomorskie/elana-torun", {
    locale,
  });
}

export function getRuchChorzowHref(locale: string = getPageLocale()) {
  return router.getHref("/klubowe/polskie/slaskie/ruch-chorzow", { locale });
}

export function getEuropeanClubsHref(locale: string = getPageLocale()) {
  return router.getHref("/klubowe/europa", { locale });
}

export function getRestOfWorldClubsHref(locale: string = getPageLocale()) {
  return router.getHref("/klubowe/reszta-swiata", { locale });
}

export function getEuropeanRepresentationHref(
  locale: string = getPageLocale(),
) {
  return router.getHref("/reprezentacyjne/europa", { locale });
}

export function getRestOfWorldRepresentationHref(
  locale: string = getPageLocale(),
) {
  return router.getHref("/reprezentacyjne/reszta-swiata", { locale });
}

export function getExchangeHref(locale: string = getPageLocale()) {
  return router.getHref("/wymiany", { locale });
}

export function getSpecialHref(locale: string = getPageLocale()) {
  return router.getHref("/specjalne", { locale });
}

export function getContactHref(locale: string = getPageLocale()) {
  return router.getHref("/kontakt", { locale });
}
