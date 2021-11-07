<script lang="ts">
	export let id: string;
	export let value: string;
	export let type: string = 'text';
	export let placeholder: string = 'Placeholder';
	export let style: string = 'primary-field';

	function typeAction(node) {
		node.type = type;
	}
</script>

<div class="field">
	<input {id} use:typeAction {placeholder} class={style} bind:value autocomplete="on" />
</div>

<style lang="scss">
	@import '../static/styles/variables.scss';

	.field {
		margin: 2rem 0;
		input {
			height: 3rem;
			width: 100%;
			padding-left: 1rem;
			outline: none;
			font-size: $font-size-2;
			border-radius: 20px;
			&.primary-field {
				background-color: $primary-color;
				color: $text-secondary-color;
			}
			&.secondary-field {
				background-color: $secondary-color;
				color: $text-primary-color;
			}
			&::placeholder {
				color: $text-secondary-color;
				opacity: 0.8;
			}
		}
	}
</style>
