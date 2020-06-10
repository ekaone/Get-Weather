import PropTypes from "prop-types";
import React from "react";

import Header from "./header";

function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen font-sans text-gray-900">
      <Header />

      <main className="flex-1 w-full max-w-4xl px-4 py-8 mx-auto md:px-8 md:py-16">
        {children}
      </main>

      <footer className="bg-gray-900">
        <nav className="flex justify-between max-w-4xl p-4 mx-auto text-sm md:p-4">
          <p className="text-white">
            Created by{` `}
            <a
              className="font-bold no-underline"
              href="https://ekaprasetia.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Eka Prasetia
            </a>
          </p>

          <p>
            <a
              className="font-bold text-white no-underline"
              href="https://github.com/ekaone/"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </p>
        </nav>
      </footer>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
