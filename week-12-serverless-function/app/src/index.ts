import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';

export interface Env {
	DATABASE_URL: string;
}

export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		const prisma = new PrismaClient({ datasourceUrl: env.DATABASE_URL }).$extends(withAccelerate());

		const users = await prisma.user.create({
			data: {
				email: 'test@test.com',
				name: 'test',
			},
		});
		console.log(JSON.stringify(users));
		return new Response(`response method: ${request.method}`);
	},
};
