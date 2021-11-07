import { z } from 'zod';

export const createUserSchema = z
	.object({
		email: z
			.string()
			.nonempty('Votre email est obligatoire.')
			.email('Votre email doit être valide.'),
		password: z
			.string()
			.nonempty('Votre mot de passe est obligatoire.')
			.min(6, 'Votre mot de passe doit au moins contenir 6 caractères.'),
		passwordConfirmation: z.string().nonempty('Vous devez confirmer votre mot de passe.')
	})
	.refine((data) => data.password === data.passwordConfirmation, {
		message: 'Les mots de passe ne sont pas identiques',
		path: ['passwordConfirmation']
	});

export type RegisterUserInput = z.infer<typeof createUserSchema>;
