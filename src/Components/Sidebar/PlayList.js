import React from "react";

const PlayList = () => {
  return (
    <nav className="mx-6 mt-2 py-2 flex-auto overflow-auto border-t border-white border-opacity-20">
      <ul>
        {new Array(40).fill(
          <li>
            <a
              href="/"
              className="text-s h-8 flex items-center text-link hover:text-white"
            >
              1. Çalma listem
            </a>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default PlayList;
