import { useState } from "react";

export function Login({ onLoginSuccess }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Token ficticio para demostrar el flujo de inicio de sesión.
    // En producción, el token debe ser generado y validado por un backend.
    const token = "token-demo-techstore-123";
    localStorage.setItem("token", token);
    localStorage.setItem("email", email);
    onLoginSuccess(token, email);
  };

  return (
    <div className="login-page">
      <form className="login-card" onSubmit={handleSubmit}>
        <div className="login-mark">TS</div>
        <p className="eyebrow">BIENVENIDO A</p>
        <h1>TechStore</h1>
        <p className="login-description">Inicia sesión para acceder a tu catálogo.</p>

        <label htmlFor="email">Correo electrónico</label>
        <input
          id="email"
          type="email"
          placeholder="correo@ejemplo.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email"
          required
        />

        <label htmlFor="password">Contraseña</label>
        <input
          id="password"
          type="password"
          placeholder="Ingresa tu contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
          required
        />

        <button className="primary-button login-button" type="submit">
          Iniciar sesión
        </button>
        <small className="demo-note">Acceso de demostración para la práctica.</small>
      </form>
    </div>
  );
}
