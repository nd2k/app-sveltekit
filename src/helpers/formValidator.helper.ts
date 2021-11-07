import type { z } from 'zod';

export const formValidator =
	<T extends z.ZodType<any, any>>(schema: T) =>
	(values: any) => {
		try {
			schema.parse(values);
			return {};
		} catch (err) {
			return (err as z.ZodError).formErrors.fieldErrors;
		}
	};
