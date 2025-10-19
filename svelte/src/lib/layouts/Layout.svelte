<script>
	import { calculateTimeLeft, getLifePercentageLived } from '../../utils';
	import Form from '../Form.svelte';
	import Portal from '../Portal.svelte';

	const { headache } = $props();

	let showModal = $state(false);
	function handleToggleModal() {
		showModal = !showModal;
	}

	let defaultBD = '2000-01-01';
	let defaultLE = 80;
	let birthDate = $state(defaultBD);
	let lifeExpectancy = $state(defaultLE);
	let name = $state('John');
	let data = $state(calculateTimeLeft(defaultBD, defaultLE));

	let percentage = $derived(getLifePercentageLived(birthDate, lifeExpectancy));

	function handleUpdateData(n, b, e) {
		if (!n || !b || !e) {
			return;
		}

		// save to local storage
		localStorage.setItem(
			'formData',
			JSON.stringify({
				name: n,
				birthDate: b,
				lifeExpectancy: e,
			})
		);

		name = n;
		birthDate = b;
		lifeExpectancy = parseInt(e);
		data = calculateTimeLeft(b, parseInt(e));
		showModal = false;
	}

	function resetData() {
		name = 'John';
		birthDate = defaultBD;
		lifeExpectancy = defaultLE;
		data = calculateTimeLeft(defaultBD, defaultLE);
		localStorage.clear();
	}

	$effect(() => {
		const interval = setInterval(() => {
			data = calculateTimeLeft(birthDate, lifeExpectancy);
		}, 1000);
        return () => clearInterval(interval)
	});

	$effect(() => {
		if (!localStorage) {
			// exits function if no local storage db available
			return;
		}
		// if we get here, we have confirmed we have a database
		if (localStorage.getItem('formData')) {
			// that means that we found some data under the key formData
			const {
				name: n,
				birthDate: b,
				lifeExpectancy: e,
			} = JSON.parse(localStorage.getItem('formData'));
			name = n;
			birthDate = b;
			lifeExpectancy = parseInt(e);
			data = calculateTimeLeft(b, parseInt(e));
		}
	});
</script>

{#if showModal}
	<Portal handleCloseModal={handleToggleModal}>
		{#snippet form()}
			<Form {handleUpdateData} />
		{/snippet}
	</Portal>
{/if}

<header>
	<h1 class="text-medium text-gradient">Death & Taxes</h1>
</header>

<main>
	<!-- here is where the children will go -->
	{@render headache({
		data,
		birthDate,
		name,
		percentage,
		lifeExpectancy,
		handleToggleModal,
		resetData,
	})}
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
