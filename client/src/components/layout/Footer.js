import React from "react";

export default function Footer() {
  return (
    <footer className="bg-dark text-white mt-5 p-4 text-center font_style">
      &copy; Conectify {new Date().getFullYear()}
    </footer>
  );
}
