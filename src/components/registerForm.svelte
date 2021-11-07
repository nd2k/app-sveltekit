<script lang="ts">
	import Field from '../components/ui/field.svelte';
	import Button from '../components/ui/button.svelte';
	import type registerDto from 'src/interfaces/registerDto.interface';
	import { createUser } from '../services/api.service';

	let registerDto: registerDto = { email: '', password: '', confirmedPassword: '' };

	const register = () => {
		createUser(registerDto);
		registerDto = { email: '', password: '', confirmedPassword: '' };
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
						bind:value={registerDto.email}
						placeholder="Votre addresse email"
					/>
					<Field
						id="password"
						type="password"
						bind:value={registerDto.password}
						placeholder="Votre mot de passe"
					/>
					<Field
						id="confirmedPassword"
						type="password"
						bind:value={registerDto.confirmedPassword}
						placeholder="Confirmer votre mot de passe"
					/>
				</form-control>
				<Button size="large">Créer votre compte</Button>
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
			}
		}
	}
</style>
