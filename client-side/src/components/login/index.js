
import "./styles.css";

function Login() {

	const loginwithgoogle = () => {
		window.open("http://localhost:5000/auth/google", "_self")
	}

	return (
		<>
			<div className="login-page">
				<h1 style={{ textAlign: "center" }}>Login</h1>
				<div className="form">
					<form className="login-form">
						<input type="text" name="" id="" placeholder="Username" />
						<input type="password" name="" id="" placeholder="Password" />
						<button >Login</button>
						<p className="message">Not Registered
							<a href="#" >create a Account</a>
						</p>
					</form>
					<button className="login-with-google-btn" onClick={loginwithgoogle}>Google</button>
				</div>
			</div>
		</>
	);
}

export default Login;