export default function Layout(props) {
	const { children } = props;

	const header = (
		<header>
			<h1 className='text-medium text-gradient'>Death & Taxes</h1>
		</header>
	);

	const footer = (
		<footer>
			<small>Created by</small>
			<a target='_blank' href='https://au.linkedin.com/in/kuot-thiik-11b019147'>
				<img
					src='https://media.licdn.com/dms/image/v2/C5603AQEDw-AWmk6N6g/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1585964066837?e=1762387200&v=beta&t=RLF9AiMbt1C4GY0bIzX5Gjuj5P6XEbzB91ulSUbvpVY'
					alt='pfp'
				/>
				<p>@kuotthiik</p>
				<i className='fa-brands fa-linkedin-in'></i>
			</a>
		</footer>
	);

	return (
		<>
			{header}
			<main>{children}</main>
			{footer}
		</>
	);
}
