const Register = () => {
  return (
    <>
      <h1>Formularz rejestracyjny</h1>
      <form>
        <label htmlFor="name">Imię i nazwisko:</label>
        <input type="text" id="name" name="name" />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />

        <label htmlFor="confirm-password">Confirm password:</label>
        <input type="password" id="confirm-password" name="confirm-password" />

        <label htmlFor="age">Agek:</label>
        <input type="number" id="age" name="age" />

        <label htmlFor="gender">Gender:</label>
        <select id="gender" name="gender">
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>

        <button type="submit">Register</button>
      </form>
    </>
  );
};

export default Register;
