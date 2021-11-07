<script lang="ts">
	import Field from '../components/ui/field.svelte';
	import Button from '../components/ui/button.svelte';
	import { createUserSchema } from '../interfaces/user.schema';
	import type { RegisterUserInput } from '../interfaces/user.schema';
	import { formValidator } from '../helpers/formValidator.helper';

	let loginUserInput: RegisterUserInput = { email: '', password: '' };
	$: validationErrors = null;

	const login = () => {
		validationErrors = formValidator(createUserSchema)(loginUserInput);
		// createUser(registerUserInput);
		loginUserInput = { email: '', password: '' };
	};
</script>

<div class="login-form">
	<div class="register">
		<h2>Bienvenue sur App</h2>
		<p>Si vous n'avez pas enocre un compte.<br /> Enregistrez-vous...</p>
		<Button size="large" color="secondary-btn">
			<a href="/user/register">Enregistrez-vous</a></Button
		>
	</div>
	<div class="sign-in">
		<div class="content">
			<h1>Connectez-vous</h1>
			<form class="form" on:submit|preventDefault={login}>
				<form-control>
					<Field
						id="email"
						type="text"
						bind:value={loginUserInput.email}
						placeholder="Votre addresse email"
					/>
					<div class="error-message">
						{#if validationErrors != null && validationErrors.email}
							{validationErrors.email[0]}
						{/if}
					</div>
					<Field
						id="password"
						type="password"
						bind:value={loginUserInput.password}
						placeholder="Votre mot de passe"
					/>
					<div class="error-message">
						{#if validationErrors != null && validationErrors.password}
							{validationErrors.password[0]}
						{/if}
					</div>
				</form-control>
				<div class="buttons">
					<Button size="large">Connectez-vous</Button>
					<a href="/" class="forget-password">Vous avez oublié votre mot de passe ?</a>
				</div>
			</form>
		</div>
	</div>
</div>

<style lang="scss">
	@import '../static/styles/variables.scss';

	.login-form {
		height: 75%;
		width: 80%;
		border-radius: 20px;
		display: flex;
		box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
		display: flex;
		justify-content: center;
		align-items: center;
		.register {
			color: $primary-color;
			width: 40%;
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
			a {
				text-decoration: none;
				color: inherit;
			}
		}
		.sign-in {
			background-color: $primary-color;
			width: 60%;
			min-height: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
			border-bottom-right-radius: 20px;
			border-top-right-radius: 20px;
			.content {
				text-align: center;
				width: 70%;
				.form {
					.error-message {
						color: red;
						text-align: left;
						font-size: 0.8rem;
						margin: 0;
						padding: 0;
						font-style: italic;
					}
					.buttons {
						display: flex;
						align-items: center;
						justify-content: center;
						flex-direction: column;
						margin-top: 2rem;
						.forget-password {
							font-size: 0.7rem;
							margin-top: 2rem;
							color: $secondary-color;
						}
					}
				}
			}
		}
	}
</style>
