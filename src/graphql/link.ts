import { Prisma } from "@prisma/client";
import { arg, enumType, extendType, idArg, inputObjectType, intArg, list, nonNull, objectType, stringArg } from "nexus";

export const Sort = enumType({
  name: "Sort",
  members: ["asc", "desc"],
});

export const LinkOrderByInput = inputObjectType({
  name: "LinkOrderByInput",
  definition(t) {
    t.field("description", { type: Sort });
    t.field("url", { type: Sort });
    t.field("createdAt", { type: Sort });
  },
});

export const Link = objectType({
  name: "Link",
  definition(t) {
    t.nonNull.string("id");
    t.nonNull.string("description");
    t.nonNull.string("url");
    t.nonNull.dateTime("createdAt");
    t.field("postedBy", {
      type: "User",
      resolve(parent, args, ctx) {
        return ctx.prisma.link.findUnique({
          where: {
            id: parent.id,
          }
        }).postedBy()
      },
    });
    t.list.nonNull.field("voters", {
      type: "User",
      resolve(parent, arg, ctx, info) {
        return ctx.prisma.link.findUnique({
          where: {
            id: parent.id,
          }
        }).voters();
      },
    });
  },
});

export const LinkQuery = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.list.nonNull.field("feed", {
      type: "Link",
      args: {
        filter: stringArg(),
        skip: intArg(),
        take: intArg(),
        orderBy: arg({ type: list(nonNull(LinkOrderByInput)) }),
      },
      resolve(parent, args, ctx, info) {
        const where = args?.filter ? {
          OR: [
            { description: { contains: args.filter } },
            { url: { contains: args.filter } },
          ]
        } : {}
        return ctx.prisma.link.findMany({
          where,
          skip: args?.skip as number | undefined,
          take: args?.take as number | undefined,
          orderBy: args?.orderBy as Prisma.Enumerable<Prisma.LinkOrderByWithRelationInput> | undefined,
        });
      },
    });
    t.field("link", {
      type: "Link",
      args: {
        id: nonNull(idArg()),
      },
      resolve(parent, args, ctx, info) {
        const { id } = args;
        const link = ctx.prisma.link.findUnique({
          where: {
            id: id,
          }
        })
        return link;
      }
    });
  },
})

export const LinkMutation = extendType({
  type: "Mutation",
  definition(t) {
    t.nonNull.field("post", {
      type: "Link",
      args: {
        description: nonNull(stringArg()),
        url: nonNull(stringArg()),
      },
      resolve(parent, args, ctx) {
        const { url, description } = args;
        const { userId } = ctx;
        if (!userId) {
          throw new Error("Connot post without logging in.")
        }
        const newLink = ctx.prisma.link.create({
          data: {
            description: description,
            url: url,
            postedBy: { connect: { id: userId } }
          }
        })
        return newLink;
      }
    });

    t.nonNull.field("updateLink", {
      type: "Link",
      args: {
        id: nonNull(idArg()),
        url: stringArg(),
        description: stringArg(),
      },
      resolve(parent, args, ctx) {
        const { id, url, description } = args;
        const newLink = ctx.prisma.link.update({
          where: {
            id: id,
          },
          data: {
            url: url as any,
            description: description as any,
          }
        });
        return newLink;
      },
    });

    t.nonNull.field("deleteLink", {
      type: "Link",
      args: {
        id: nonNull(idArg()),
      },
      resolve(parent, args, ctx) {
        const { id } = args;
        const oldLink = ctx.prisma.link.delete({
          where: {
            id: id
          }
        });
        return oldLink;
      },
    });
  },
})
