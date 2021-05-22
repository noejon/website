import { Hamburger, BaseBread, TopBread, Patty } from './burger.styled';

type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClick: any;
  toggled?: boolean;
};

const Burger: React.FunctionComponent<Props> = ({ onClick, toggled }) => {
  return (
    <Hamburger onClick={onClick}>
      <TopBread toggled={toggled} />
      <Patty toggled={toggled} />
      <BaseBread toggled={toggled} />
    </Hamburger>
  );
};

export default Burger;
