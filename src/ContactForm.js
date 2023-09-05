const ContactForm = () => {
	return (
		<>
			<section>
				<div className="contact">
					<form action="mailto:similoluwababatunde@gmail.com" id="form">
						<input type="text" placeholder="Enter your name" />
						<label htmlFor="form"></label>
						<input type="text" placeholder="Subject of message" />
						<label htmlFor="form"></label>
						<textarea
							name="message"
							id="message"
							cols="30"
							rows="10"
							placeholder="Enter message here..."
						></textarea>
						<button className="submit">Submit</button>
					</form>
				</div>
			</section>
			<section></section>
		</>
	);
};

export default ContactForm;
