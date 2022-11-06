import { objectType } from "nexus";

export const User = objectType({
  name: "User",
  definition(t) {
    t.nonNull.string("id");
    t.nonNull.string("name");
    t.nonNull.string("email");
    t.list.nonNull.field("links", {
      type: "Link",
      resolve(parent, args, ctx) {
        return ctx.prisma.user.findUnique({
          where: {
            id: parent.id,
          },
        }).links()
      }
    })
  },
})
