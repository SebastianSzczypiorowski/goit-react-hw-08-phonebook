const Login = () => {
  return (
    <>
      <h1>Logowanie</h1>
      <form action="" method="post">
        <label htmlFor="email">email:</label>
        <input type="text" id="email" name="email" />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />
        <button type="submit">LogIn</button>
      </form>
    </>
  );
};

export default Login;
