# Simple burger with styled components

## The burger

Create a file `burger.styled.tsx`

```tsx
import styled from 'styled-components';
import { ThemeType } from '../lib/theme';

export const Ingredient = styled.div<{ theme: ThemeType }>`
  width: 1.5rem;
  height: 3px;
  background-color: ${({ theme }): string => theme.colors.main};
  margin: 4px;
`;

Ingredient.displayName = 'Ingredient';

export const Hamburger = styled.div`
  display: none;

  @media screen and (max-width: ${({ theme }): string =>
      theme.breakpoints.md}) {
    display: block;
    cursor: pointer;
  }
`;

Hamburger.displayName = 'Hamburger';

```

Then create the burger component `burger.tsx`

```tsx
import { Hamburger, Ingredient } from './burger.styled';

const Burger: React.FunctionComponent = () => {
  return (
    <Hamburger>
      <Ingredient />
      <Ingredient />
      <Ingredient />
    </Hamburger>
  );
};

export default Burger;

```

Add the onClick event listener

```jsx
type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClick: any;
};

const Burger: React.FunctionComponent<Props> = ({ onClick }) => {
  return (
    <Hamburger onClick={onClick}>
      <Ingredient />
      <Ingredient />
      <Ingredient />
    </Hamburger>
  );
};
```


globalStyles:

```css
@media screen and (max-width: 720px) {
  body: overflow-x: hidden;
}
```