import * as React from 'react';
import Alert from './alert'
import Footer from './footer'
import Meta from './meta'

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
    </>
  )
}

export default Layout
