import 'server-only';
import { Router, schema } from 'next-roots';

export const router = new Router(schema);

export function getLocales() {
  return schema.locales;
}

export function getPageLocale() {
  return router.getLocaleFromHref(Router.getPageHref());
}

// export function getAboutHref(locale: string = getPageLocale()) {
//   return router.getHref("/kontakt", { locale });
// }

export function getContactsHref(locale: string = getPageLocale()) {
  console.log(router.getHref('/kontakt', { locale }), locale);
  return router.getHref('/kontakt', { locale });
}

export function getHomeHref(locale: string = getPageLocale()) {
  return router.getHref('/', { locale });
}
