import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

import { containerClass } from "@/utils/customClasses";

type Props = {
  children?: React.ReactNode;
  showHero?: boolean;
};

const Layout = ({ children, showHero = false }: Props) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {showHero && <Hero />}
      <div className={`${containerClass} mx-auto flex-1 py-10`}>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
