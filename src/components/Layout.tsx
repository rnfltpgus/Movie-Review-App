import styled from "styled-components";

type LayoutProps = {
  children: any;
};

const Layout = ({ children }: LayoutProps) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Layout;

const Wrapper = styled.div`
  margin-top: 5vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
