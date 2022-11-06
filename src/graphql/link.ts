import { extendType, idArg, nonNull, objectType, stringArg } from "nexus";

export const Link = objectType({
  name: "Link",
  definition(t) {
    t.nonNull.string("id");
    t.nonNull.string("description");
    t.nonNull.string("url");
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
  },
});

export const LinkQuery = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.list.nonNull.field("feed", {
      type: "Link",
      resolve(parent, args, ctx, info) {
        return ctx.prisma.link.findMany();
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
    })
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
        const newLink = ctx.prisma.link.create({
          data: {
            description: description,
            url: url,
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
