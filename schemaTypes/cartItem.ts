import { defineType, defineField } from 'sanity'

export const cartItem = defineType({
  type: "object",
  name: "cartItem",
  fields: [
    defineField({
      type: "reference",
      name: "dish",
      to: [{ type: "dish" }],
    }),
    defineField({
      type: "number",
      name: "quantity",
    }),
  ],
});

