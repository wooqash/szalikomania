
import KluboweEuropaCountryPageOrigin from '../../../../../_roots/klubowe/europa/[country]/page'
import { Router, compileHref } from 'next-roots'

export default function KluboweEuropaCountryPage({ params, ...otherProps }:any) {
  Router.setPageHref(compileHref('/en/clubs/europe/:country', params))
  {/* @ts-ignore */}
  return <KluboweEuropaCountryPageOrigin {...otherProps} params={params} pageHref={Router.getPageHref()} />
}

import {generateMetadata as generateMetadataOrigin} from '../../../../../_roots/klubowe/europa/[country]/page'

export async function generateMetadata({ params, ...otherProps }:any) {
  return generateMetadataOrigin({ ...otherProps, params, pageHref: compileHref('/en/clubs/europe/:country', params) })
}

import {generateStaticParams as generateStaticParamsOrigin} from '../../../../../_roots/klubowe/europa/[country]/page'

export async function generateStaticParams() {
  return generateStaticParamsOrigin({ pageLocale: "en" })
}
