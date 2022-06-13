import Content from "./content/Content";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import classes from "./Layout.module.scss";

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className={classes.container}>
      <Header />
      <Content className={classes.content}>{children}</Content>
      <Footer />
    </div>
  );
};

export default Layout;
