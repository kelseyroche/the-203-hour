// // src/components/Header.jsx
// import Logo from './Logo'

// function Header() {
//   return (
//     <header className="w-full px-4 py-2 bg-white shadow-md flex justify-between items-center">
//       <Logo />
//       <button className="bg-[#f738b1] text-white rounded-full px-4 py-2 text-sm font-bold hover:bg-[#f4009a] transition">
//         Shake It!
//       </button>
//     </header>
//   )
// }

// export default Header;

import '../styles/Header.css'
import Logo from './Logo'

function Header() {
  return (
    <header className="header">
      <Logo />
      <button className="shake-button">Shake It!</button>
    </header>
  )
}

export default Header;