import React from "react";

import "./NavBar.css";

export default function NavBar() {
  return (
    <>
      <nav>
        <h1>Phonebook</h1>
        <ul>
          <li className="userName">UserName</li>
        </ul>
      </nav>
    </>
  );
}
