import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient("https://gpkqqlpvetttdamjgexd.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdwa3FxbHB2ZXR0dGRhbWpnZXhkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTMzMTE0MzksImV4cCI6MjAyODg4NzQzOX0.e8LUyRZKaWKDwqbV4dRVgcBuarggCDI3sd5J1vuWyUQ");


function App() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    getUsuarios();
  }, []);

  async function getUsuarios() {
    const { data } = await supabase.from("usuarios").select();
    setUsuarios (data);
  }

  return (
    <div className="App">
      <header className='App-header'>
      <nav>
        <a href="user.html">usuarios</a>
        <a href="products.html">productos</a>
        <a href="productSession.html">sesion de productos</a>
        <a href="session.html">sesiones</a>
        <a href="gender.html">genero</a>
        <a href="adress.html">direccion</a>
        <a href="customer.html">clientes</a>
        <a href="categories.html">categorias</a>
    </nav>
      </header>
      <main className="App-main">
      <ul>
        {usuarios.map((usuario) => (
          <li key={usuario.nombre}>{usuario.nombre}</li>
        ))}
      </ul>
        <div className='card'>
          <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
          <p>Sed ullamcorper dolor at velit tempor, ac bibendum sem interdum. Pellentesque fermentum ornare eros ac facilisis.</p>
          <button>ver mas</button>
        </div>
        <div className='card'>
          <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
          <p>Sed ullamcorper dolor at velit tempor, ac bibendum sem interdum. Pellentesque fermentum ornare eros ac facilisis.</p>
          <button>ver mas</button>
        </div>
        <div className='card'>
          <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
          <p>Sed ullamcorper dolor at velit tempor, ac bibendum sem interdum. Pellentesque fermentum ornare eros ac facilisis.</p>
          <button>ver mas</button>
        </div>
        <div className='card'>
          <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
          <p>Sed ullamcorper dolor at velit tempor, ac bibendum sem interdum. Pellentesque fermentum ornare eros ac facilisis.</p>
          <button>ver mas</button>
        </div>
        <div className='card'>
          <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
          <p>Sed ullamcorper dolor at velit tempor, ac bibendum sem interdum. Pellentesque fermentum ornare eros ac facilisis.</p>
          <button>ver mas</button>
        </div>
        <div className='card'>
          <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
          <p>Sed ullamcorper dolor at velit tempor, ac bibendum sem interdum. Pellentesque fermentum ornare eros ac facilisis.</p>
          <button>ver mas</button>
        </div>
        <div className='card'>
          <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
          <p>Sed ullamcorper dolor at velit tempor, ac bibendum sem interdum. Pellentesque fermentum ornare eros ac facilisis.</p>
          <button>ver mas</button>
        </div>
        <div className='card'>
          <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
          <p>Sed ullamcorper dolor at velit tempor, ac bibendum sem interdum. Pellentesque fermentum ornare eros ac facilisis.</p>
          <button>ver mas</button>
        </div>
        <div className='card'>
          <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
          <p>Sed ullamcorper dolor at velit tempor, ac bibendum sem interdum. Pellentesque fermentum ornare eros ac facilisis.</p>
          <button>ver mas</button>
        </div>
      </main>
    </div>
    
  );
}

export default App;
