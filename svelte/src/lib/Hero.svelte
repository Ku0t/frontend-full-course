<script>
	const { name, percentage, data, handleToggleModal, resetData } = $props();
</script>

<section id="hero">
	<h3 class="text-large">
		{name}, you have {data['weeks']} weeks left. make them count 🫡
	</h3>
	<div class="btns-container">
		<button onclick={handleToggleModal}>Not {name}?</button>
		<button onclick={() => {
            navigator.clipboard.writeText('https://deathandtaxes.netlify.app')
            alert('Copied ☺️')
        }} class="link-button">Copy Link</button>
		<button onclick={resetData} class="link-button">Reset Data</button>
	</div>
	<div class="progress-bar">
		<div style:width={percentage}>
			<div>
				<i class="fa-sold fa-baby"></i>
				<h6 class="bar-label">Birth</h6>
			</div>
			<h6>{percentage}</h6>
		</div>
		<div>
			<h6 class="bar-label">Death</h6>
			<i class="fa-solid fa-skull"></i>
		</div>
	</div>
</section>

<style>
</style>
