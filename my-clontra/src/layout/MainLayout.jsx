import Footer from "../components/Footer";
import Header from "../components/Header";

export default function MainLayout(props) {
  const { children } = props;
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
