import { ThreeCircles } from 'react-loader-spinner';

import { Container } from './Loader.styled';

const Loader = () => {
  return (
    <Container>
      <ThreeCircles
        height="40"
        width="40"
        color="#3f51b5"
        visible={true}
        ariaLabel="three-circles-rotating"
      />
    </Container>
  );
};

export default Loader;
