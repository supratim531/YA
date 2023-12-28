import { useEffect } from "react";
import Home from "./page/Home";

function App() {
  useEffect(() => {
    const navigation = document.querySelector(".navbar");

    if (navigation) {
      const navigationHeight = navigation.offsetHeight;
      document.documentElement.style.setProperty(
        "--scroll-padding", navigationHeight + "px"
      );
    }
  });

  return (
    <Home />
  );
}

export default App;
