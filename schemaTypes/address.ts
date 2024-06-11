import { defineType, defineField } from 'sanity'

export const address = defineType({
  type: "object",
  name: "address",
  fields: [
    defineField({
      type: "string",
      name: "street",
    }),
    defineField({
      type: "string",
      name: "city",
    }),
    defineField({
      type: "string",
      name: "zip",
    }),
    defineField({
      type: "string",
      name: "country",
    }),
  ],
});

