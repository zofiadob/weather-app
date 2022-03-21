import React from "react";

export default function HamCloseIcon() {
  function onClickHandleHam() {
    const hamIcon = document.querySelector(".ani-icon-ham");
    const closeIcon = document.querySelector(".ani-icon-ham");
    if (
      hamIcon.getAttribute("class") === "ani-icon-ham" ||
      hamIcon.getAttribute("class") === "ani-icon-ham ani-active-close visible" ||
      closeIcon.getAttribute("class") === "ani-icon-close" ||
      closeIcon.getAttribute("class") === "ani-icon-close ani-icon-close-close invisible"
    ) {
      document
        .querySelector(".ani-icon-ham")
        .setAttribute("class", "ani-icon-ham ani-active-open");
      setTimeout(() => {
        document
          .querySelector(".ani-icon-ham")
          .setAttribute("class", "ani-icon-ham ani-active-open invisible");
      }, 300);

      setTimeout(() => {
        document
        .querySelector(".ani-icon-close")
        .setAttribute("class", "ani-icon-close ani-icon-close-open visible");
      }, 600);

      setTimeout(() => {
        document.querySelector(".ani-icon-close").setAttribute("style", "transform: translate(-20px, 0);");
      }, 1000);
    } else {
      document
      .querySelector(".ani-icon-close")
      .setAttribute("class", "ani-icon-close ani-icon-close-close");
      setTimeout(() => {
        document.querySelector(".ani-icon-close").setAttribute("style", "transform: translate(40px, 0);");
      }, 290);
      setTimeout(() => {
        document
          .querySelector(".ani-icon-ham")
          .setAttribute("class", "ani-icon-ham ani-active-close visible");
      }, 550);
    }
  }

  return (
    <>
      <svg
        className="ani-icon-ham"
        width="30"
        height="19"
        viewBox="0 0 30 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        onClick={onClickHandleHam}
      >
        <rect
          className="rect-1"
          width="29.1333"
          height="3.8"
          rx="1.9"
          fill="white"
        />
        <rect
          className="rect-2"
          y="7.59998"
          width="29.1333"
          height="3.8"
          rx="1.9"
          fill="white"
        />
        <rect
          className="rect-3"
          y="15.2"
          width="29.1333"
          height="3.8"
          rx="1.9"
          fill="white"
        />
      </svg>

      <svg className="ani-icon-close"
        width="21"
        height="21"
        viewBox="0 0 21 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        onClick={onClickHandleHam}
      >
        <rect
          y="18.0876"
          width="25.5796"
          height="3.8"
          rx="1.9"
          transform="rotate(-45 0 18.0876)"
          fill="white"
        />
        <rect
          width="25.5796"
          height="3.8"
          rx="1.9"
          transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 20.7745 18.0876)"
          fill="white"
        />
      </svg>
    </>
  );
}
