<script lang="ts">
	import Field from '../components/ui/field.svelte';
	import Button from '../components/ui/button.svelte';
	import { createUser } from '../services/api.service';
	import type { RegisterUserInput } from '../interfaces/user.schema';
	import { createUserSchema } from '../interfaces/user.schema';
	import { formValidator } from '../helpers/formValidator.helper';

	let registerUserInput: RegisterUserInput = { email: '', password: '', passwordConfirmation: '' };
	$: validationErrors = null;

	const register = () => {
		validationErrors = formValidator(createUserSchema)(registerUserInput);
		createUser(registerUserInput);
		registerUserInput = { email: '', password: '', passwordConfirmation: '' };
	};
</script>

<div class="register-form">
	<div class="sign-in">
		<h2>Bienvenue sur App</h2>
		<p>Vous avez déjà un compte.<br /> Connectez-vous...</p>
		<Button size="large" color="secondary-btn">
			<a href="/user/login">Connectez-vous</a></Button
		>
	</div>
	<div class="register">
		<div class="content">
			<h1>Créer un compte</h1>
			<form class="form" on:submit|preventDefault={register}>
				<form-control>
					<Field
						id="email"
						type="text"
						bind:value={registerUserInput.email}
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
						bind:value={registerUserInput.password}
						placeholder="Votre mot de passe"
					/>
					<div class="error-message">
						{#if validationErrors != null && validationErrors.password}
							{validationErrors.password[0]}
						{/if}
					</div>
					<Field
						id="confirmedPassword"
						type="password"
						bind:value={registerUserInput.passwordConfirmation}
						placeholder="Confirmer votre mot de passe"
					/>
					<div class="error-message">
						{#if validationErrors != null && validationErrors.passwordConfirmation}
							{validationErrors.passwordConfirmation[0]}
						{/if}
					</div>
				</form-control>
				<div class="button">
					<Button size="large">Créer votre compte</Button>
				</div>
			</form>
		</div>
	</div>
</div>

<style lang="scss">
	@import '../static/styles/variables.scss';

	a {
		text-decoration: none;
		color: inherit;
	}
	.register-form {
		height: 75%;
		width: 80%;
		border-radius: 20px;
		display: flex;
		box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
		display: flex;
		justify-content: center;
		align-items: center;
		.sign-in {
			color: $primary-color;
			width: 40%;
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
		}
		.register {
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
				.error-message {
					color: red;
					text-align: left;
					font-size: 0.8rem;
					margin: 0;
					padding: 0;
					font-style: italic;
				}
				.button {
					margin-top: 2rem;
				}
			}
		}
	}
</style>
