import "../../styles/styleGlobal.scss";
import Header from "../../components/header/Header";
import Menu from "../../components/menu/Menu";
import styles from "./Inicial.module.scss";
import Banner from "../../components/banner/Banner";
import Footer from "../../components/footer/Footer";
import Galeria from "../../components/galeria/Galeria";

const Inicial = () => {
  return (
    <>
      <Header />
      <main>
        <section className={styles.principal}>
          <Menu />
          <Banner />
        </section>
      </main>
      <Galeria />
      <Footer />
    </>
  );
};

export default Inicial;
