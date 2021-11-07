<script>
	import Register from '../../components/register.svelte';
</script>

<div class="container">
	<div class="form">
		<div class="sign-in">
			<h2>Bienvenue sur App</h2>
			<p>Vous avez déjà un compte.<br /> Connectez-vous...</p>
			<button>Connectez-vous</button>
		</div>
		<div class="register">
			<Register />
		</div>
	</div>
</div>

<style lang="scss">
	.container {
		margin: 0;
		height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
		color: #ffffff;
		.form {
			background-color: #525174;
			height: 75%;
			width: 80%;
			border-radius: 20px;
			display: flex;
			box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
			.sign-in {
				flex-grow: 1;
				display: flex;
				justify-content: center;
				align-items: center;
				flex-direction: column;
				button {
					color: #525174;
					background-color: #ffffff;
					border-radius: 50px;
					padding: 1rem 2rem;
					align-self: center;
					cursor: pointer;
					width: 70%;
				}
			}
			.register {
				flex-grow: 2;
			}
		}
	}
</style>
