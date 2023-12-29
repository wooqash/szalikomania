
import KlubowePolskaDolnoslaskiePageOrigin from '../../../../../_roots/klubowe/polska/dolnoslaskie/page'
import { Router } from 'next-roots'

export default function KlubowePolskaDolnoslaskiePage(props:any) {
  Router.setPageHref("/klubowe/polska/dolnoslaskie")
  {/* @ts-ignore */}
  return <KlubowePolskaDolnoslaskiePageOrigin {...props} pageHref={Router.getPageHref()} />
}
