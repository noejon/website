import Footer from './footer';
import Header from './header';
import Meta from './meta';
import Page from './page';

const Layout: React.FunctionComponent = ({ children }) => {
  return (
    <>
      <Meta />
      <Page>
        <Header />
        <main>{children}</main>
        <Footer />
      </Page>
    </>
  );
};

export default Layout;
