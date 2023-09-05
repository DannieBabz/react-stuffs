import ContactForm from "./ContactForm";


function Nav() {
	return (
		<>
			<section>
				<div className="Navigation">
					<div className="logo">
						<img src="free.png" alt="logo" />
					</div>
					<div className="nav-links">
						<li>
							<a href="/">Home</a>
						</li>
						<li>
							<a href="/">About Us</a>
						</li>
						<li>
							<a href="/" className="active">Contact</a>
						</li>
						<a href="/" className="enter">
							Log In
						</a>
						<a href="/" className="enter">
							Sign Up
						</a>
					</div>
				</div>
			</section>
			<ContactForm />
		</>
	);
}
export default Nav;
