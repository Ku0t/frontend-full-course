<script>
	import { calculateTimeLeft, getLifePercentageLived } from '../../utils';

	const { headache } = $props();

	let birthDate = '2000-01-01';
	let lifeExpectancy = 80;
	let name = 'John';

	let data = calculateTimeLeft(birthDate, lifeExpectancy);
	let percentage = getLifePercentageLived(birthDate, lifeExpectancy);
</script>

<header>
	<h1 class="text-medium text-gradient">Death & Taxes</h1>
</header>

<main>
	<!-- here is where the children will go -->
	{@render headache({ data, birthDate, name, percentage, lifeExpectancy })}
</main>

<footer>
	<small>Created By</small>
	<a target="_blank" href="https://github.com/Ku0t">
		<img
			src="https://media.licdn.com/dms/image/v2/C5603AQEDw-AWmk6N6g/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1585964066837?e=1762387200&v=beta&t=RLF9AiMbt1C4GY0bIzX5Gjuj5P6XEbzB91ulSUbvpVY"
			alt="pfp"
		/>
		<p>@Ku0t</p>
		<i class="fa-brands fa-github"></i>
	</a>
</footer>

<style></style>
