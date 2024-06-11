import { defineType, defineField, defineArrayMember } from 'sanity'

export const dish = defineType({
  type: "document",
  name: "dish",
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
    defineField({
      type: "number",
      name: "price",
    }),
    defineField({
      type: "image",
      name: "image",
      options: { hotspot: true },
    }),
    defineField({
      type: "reference",
      name: "category",
      to: [{ type: "category" }],
    }),
    defineField({
      type: "array",
      name: "ingredients",
      of: [
        defineArrayMember({
          type: "ingredient",
        }),
      ],
    }),
    defineField({
      type: "array",
      name: "allergens",
      of: [
        defineArrayMember({
          type: "allergen",
        }),
      ],
    }),
  ],
});

