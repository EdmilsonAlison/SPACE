import "styles/styleGlobal.scss";
import Header from "components/header/Header";
import Menu from "components/menu/Menu";
import styles from "./Inicial.module.scss";
import Banner from "components/banner/Banner";
import Footer from "components/footer/Footer";
import Galeria from "components/galeria/Galeria";
import Populares from "components/populares/Populares";

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
      <div className={styles.galeria}>
        <Galeria />
        <Populares />
      </div>

      <Footer />
    </>
  );
};

export default Inicial;
