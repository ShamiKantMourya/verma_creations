import { useState } from "react";
import { FaArrowUp } from "react-icons/fa";


const ScrollBackToTop = () => {
  const [showScroll, setShowScroll] = useState(false);

  const showScrollbar = () => {
    if (window.scrollY >= 200) {
      setShowScroll(true);
    } else {
      setShowScroll(false)
    }
  }

  function goToTop() {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
  }
  window.addEventListener("scroll", showScrollbar);
  return (
    <div className="flex fixed bottom-8 right-8 z-20 cursor-pointer">
      {
        showScroll ? (
          <div className="flex h-12 w-12 bg-red-600 text-white justify-center items-center rounded-3xl tab:h-16 tab:w-16 tab:rounded-full" onClick={goToTop}>
            <FaArrowUp  className="tab:text-2xl"/>
          </div>
        ) : null
      }
    </div>
  )
}

export default ScrollBackToTop;