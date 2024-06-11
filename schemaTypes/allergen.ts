import { defineType, defineField } from 'sanity'

export const allergen = defineType({
  type: "document",
  name: "allergen",
  fields: [
    defineField({
      type: "string",
      name: "title",
    }),
    defineField({
      type: "slug",
      name: "slug",
      options: { source: "title" },
    }),
    defineField({
      type: "text",
      name: "description",
    }),
  ],
});

