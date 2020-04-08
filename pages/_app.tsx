import '../styles/index.css'

type props = {
  Component: React.ComponentType,
  pageProps: any
}

 const MyApp: React.FunctionComponent<props> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
}
export default MyApp