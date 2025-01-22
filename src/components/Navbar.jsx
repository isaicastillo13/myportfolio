function Navbar() {

  return (
    <nav className="flex justify-between items-center p-8 text-white text-pearl bg-negro font-beiruti">
      <img
        className="h-12 w-12"
        src="./assets/images/fotoPerfil4.JPG"
        alt="Foto de Perfil Isaias"
      />

        <ul className="flex justify-center space-x-4">
          <li>
            <a className="no-underline" href="#">Mis Trabajos</a>
          </li>
          <li>
            <a className="no-underline" href="#">Mis Trabajos</a>
          </li>
        </ul>

      <div>
        <button className=" hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          EN
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
