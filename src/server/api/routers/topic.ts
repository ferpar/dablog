import { z } from "zod";

const publisherId = process.env.BLOG_PUBLISHER;

import { createTRPCRouter, publicProcedure, protectedProcedure } from "~/server/api/trpc";

export const topicRouter = createTRPCRouter({
  getAll: protectedProcedure.query(({ ctx }) => {
    return ctx.db.topic.findMany({
      where: { userId: ctx.session.user.id },
    });
  }),

  create : protectedProcedure
    .input(z.object({ title: z.string()}))
    .mutation(({ ctx, input }) => {
        return ctx.db.topic.create({
            data: {
                title: input.title,
                userId: ctx.session.user.id
            }
        })
    }),

  getPublisherNotes: publicProcedure
    .query(async ({ ctx  }) => {
      console.log("USER ID", publisherId)
      return ctx.db.topic.findMany({
        where: {
          userId: publisherId,
        },
        include: {
          notes: {
            orderBy: {
              createdAt: "desc",
            },
            skip: 0,
            take: 1,
          }
        }
      })
    })
});
