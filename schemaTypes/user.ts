import { defineType, defineField, defineArrayMember } from 'sanity'

export const user = defineType({
  type: "document",
  name: "user",
  fields: [
    defineField({
      type: "string",
      name: "name",
    }),
    defineField({
      type: "string",
      name: "email",
    }),
    defineField({
      type: "array",
      name: "orders",
      of: [
        defineArrayMember({
          type: "order",
        }),
      ],
    }),
    defineField({
      type: "array",
      name: "cart",
      of: [
        defineArrayMember({
          type: "cartItem",
        }),
      ],
    }),
    defineField({
      type: "address",
      name: "address",
    }),
  ],
});

