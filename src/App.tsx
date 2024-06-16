import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import IPhone8Plus from "./pages/IPhone8Plus";
import IPhone8Plus1 from "./pages/IPhone8Plus1";
import IPhone8Plus2 from "./pages/IPhone8Plus2";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/iphone-8-plus-4":
        title = "";
        metaDescription = "";
        break;
      case "/iphone-8-plus-3":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<IPhone8Plus />} />
      <Route path="/iphone-8-plus-4" element={<IPhone8Plus1 />} />
      <Route path="/iphone-8-plus-3" element={<IPhone8Plus2 />} />
    </Routes>
  );
}
export default App;
