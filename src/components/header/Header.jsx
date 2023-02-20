import React from "react"
import "./header.css"
import { User } from "./User"
import { nav } from "../../assets/data/data"
import { Link } from "react-router-dom"

export const Header = () => {
   window.addEventListener("scroll", function () {
    const header = this.document.querySelector(".header")
    header.classList.toggle("active", this.window.scrollY > 100)
  }) 
  return (
    <>
      <header className='header'>
        <div className='scontainer flex'>
          <div className='logo'>
            <Link to='/'>
            <img src="https://i.pinimg.com/736x/5e/b9/24/5eb924aee830d769dff1ad0997a99d25.jpg" alt='logo' width='100px' />
            </Link>
          </div>
          <nav>
            <ul>
              {nav.map((link) => (
                <li key={link.id}>
                  <Link to={link.url}>{link.text}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className='account flexCenter'>
            <User />
          </div>
        </div>
      </header>
    </>
  )
}
