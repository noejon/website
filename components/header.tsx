import Link from 'next/link'
import {HeaderWrapper, Subtitle, TitleContainer} from './header.styled'

const Header: React.FunctionComponent = () => {
  return (
    <HeaderWrapper>
      <TitleContainer>
        <h1>
          <Link href="/">
            noejon.dev
          </Link>
        </h1>
        <Subtitle>
          Hello friends!
        </Subtitle>
      </TitleContainer>
    </HeaderWrapper>
  )
}

export default Header