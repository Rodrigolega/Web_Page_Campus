import { useState } from "react";

// Componente conservado para una futura activación de acceso de demostración.
export function Login({ onLoginSuccess }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const token = "token-demo-campus-hub";
    localStorage.setItem("token", token);
    localStorage.setItem("email", email);
    onLoginSuccess(token, email);
  };

  return (
    <div className="login-page">
      <form className="login-card" onSubmit={handleSubmit}>
        <div className="login-mark">CH</div>
        <p className="eyebrow">BIENVENIDO A</p>
        <h1>Campus Hub</h1>
        <p className="login-description">Accede a la vida académica y deportiva de tu campus.</p>
        <label htmlFor="email">Correo institucional</label>
        <input id="email" type="email" placeholder="nombre@universidad.edu" value={email} onChange={(event) => setEmail(event.target.value)} autoComplete="email" required />
        <label htmlFor="password">Contraseña</label>
        <input id="password" type="password" placeholder="Ingresa tu contraseña" value={password} onChange={(event) => setPassword(event.target.value)} autoComplete="current-password" required />
        <button className="primary-button login-button" type="submit">Ingresar</button>
        <small className="demo-note">Acceso de demostración sin autenticación real.</small>
      </form>
    </div>
  );
}
