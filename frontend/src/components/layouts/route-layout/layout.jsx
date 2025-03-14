import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";
import { BookGenrerProvider } from "../../../features/catalog/context/book_genrer";

const Layout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return (
    <BookGenrerProvider>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="grow py-4 bg-[#e3e6e6] [&>section]:max-w-[1280px] [&>section]:w-full [&>section]:m-auto ">
          <Outlet />
        </main>
        <Footer />
      </div>
    </BookGenrerProvider>
  );
};

export default Layout;
