
import KlubowePolskaLodzkiePageOrigin from '../../../../../_roots/klubowe/polska/lodzkie/page'
import { Router } from 'next-roots'

export default function KlubowePolskaLodzkiePage(props:any) {
  Router.setPageHref("/klubowe/polska/lodzkie")
  {/* @ts-ignore */}
  return <KlubowePolskaLodzkiePageOrigin {...props} pageHref={Router.getPageHref()} />
}

export { metadata } from '../../../../../_roots/klubowe/polska/lodzkie/page'
