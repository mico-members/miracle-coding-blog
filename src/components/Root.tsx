import Foo from './Foo';
import Header from './header/Header';
import Body from './body/Body';

const Root = () => {
  return (
    <>
      <Header />
      <Body />

      <Foo />
    </>
  );
};

export default Root;
