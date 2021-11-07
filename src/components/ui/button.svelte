<script lang="ts">
	export let size: string = 'medium';
	export let color: string = 'primary-btn';
	export let type: string = 'submit';
</script>

<button class="{size} {color}" {type}><slot /></button>

<style lang="scss">
	@import '../static/styles/variables.scss';

	button {
		border-radius: 50px;
		padding: 1rem 2rem;
		align-self: center;
		cursor: pointer;
		font-size: $font-size-2;
		&.small {
			width: 30%;
		}
		&.medium {
			width: 50%;
		}
		&.large {
			width: 75%;
		}
		&.extra-large {
			width: 100%;
		}
		&.primary-btn {
			background-color: $primary-color;
			color: $secondary-color;
			&:hover {
				background-color: $secondary-color;
				color: $primary-color;
				transition: 0.5s;
			}
		}
		&.secondary-btn {
			background-color: $secondary-color;
			color: $primary-color;
			box-shadow: $box-shadow-secondary-1;
			&:hover {
				background-color: $primary-color;
				color: $secondary-color;
				transition: 0.5s;
			}
		}
		&:active {
			transform: scale(0.96);
			box-shadow: $box-shadow-secondary-2;
		}
	}
</style>
