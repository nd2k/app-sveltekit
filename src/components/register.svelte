<div class="container">
	<div class="content">
		<h1>Créer un compte</h1>
		<form class="form">
			<form-control>
				<div class="field">
					<input id="email" type="text" placeholder="Votre addresse email" autocomplete="on" />
				</div>
				<div class="field">
					<input id="password" type="password" placeholder="Votre mot de passe" autocomplete="on" />
				</div>
				<div class="field">
					<input
						id="confirmedPassword"
						type="password"
						placeholder="Confirmer votre mot de passe"
						autocomplete="on"
					/>
				</div>
			</form-control>
			<button>Créer votre compte</button>
		</form>
	</div>
</div>

<style lang="scss">
	.container {
		background-color: #ffffff;
		color: #525174;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		border-bottom-right-radius: 20px;
		border-top-right-radius: 20px;
		.content {
			h1 {
				text-align: center;
				font-size: 2rem;
			}
			.form {
				display: flex;
				flex-direction: column;
				justify-content: center;
				.field {
					margin: 2rem 0;
					input {
						height: 3rem;
						width: 20rem;
						background-color: #525174;
						opacity: 0.5;
						border-radius: 10px;
						font-size: 1.2rem;
						padding-left: 1rem;
						outline: none;
					}
					input::placeholder {
						color: #ffffff;
					}
				}
				button {
					color: #ffffff;
					background-color: #525174;
					border-radius: 50px;
					padding: 1rem 2rem;
					align-self: center;
					cursor: pointer;
					width: 70%;
					box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
						rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
				}
			}
		}
	}
</style>
