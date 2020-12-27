import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './SecondryButtonStyles';

interface Props {
  path: string;
}

type SecondryButtonProps = JSX.IntrinsicElements['button'] & Props;

const SecondryButton: React.FC<SecondryButtonProps> = ({
  path,
  children,
  ...rest
}) => {
  return (
    <Container
      {...rest as SecondryButtonProps}
    >
      <Link to={path}>
        {children}
      </Link>
    </Container>
  )
}

export default SecondryButton