import styled from 'styled-components'
import Alert from './alert'
import Footer from './footer'
import Meta from './meta'
import Reset from './reset'

type Props = {
  preview?: boolean
}



const Layout: React.FunctionComponent<Props> = ({ preview, children }) => {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <Alert preview={preview} />
        <main>{children}</main>
      </div>
      <Footer />
      <Reset/>
    </>
  )
}

export default Layout
