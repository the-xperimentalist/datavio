// getting error ambiguous import in this class
import React from 'react'
import { Menu } from 'react-router-dom'
import logo from "../assets/logo.png"


export default const Navbar = (props) => {
  return (
    <>
      <div className="logo" style={{ backgroundImage: `url(${logo})`}} />
      <Menu
        theme="dark"
        mode="horizontal"
        selectable={false}
        items={new Array(15).fill(null).map((_, index) => {
          const key = index + 1;
          return {
            key,
            label: `nav ${key}`,
          };
        })}
      />
    </>)
}
