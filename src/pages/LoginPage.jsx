const LoginPage = () => {
  return (
    <form>
      <div className="form-floating mb-3">
        <input
          type="email"
          className="form-control"
          id="floatingInput"
          placeholder="name@example.com"
          name="email"
        />
        <label htmlFor="floatingInput">Email address</label>
      </div>
      <div className="form-floating">
        <input
          type="password"
          className="form-control"
          id="floatingPassword"
          placeholder="Password"
          name="password"
        />
        <label htmlFor="floatingPassword">Password</label>
      </div>
      <input type="submit" value="Create" className="btn btn-primary"/>
    </form>
  );
};

export default LoginPage;
