import { defineType, defineField, defineArrayMember } from 'sanity'

export const order = defineType({
  type: "document",
  name: "order",
  fields: [
    defineField({
      type: "array",
      name: "dishes",
      of: [
        defineArrayMember({
          type: "dish",
        }),
      ],
    }),
    defineField({
      type: "number",
      name: "total",
    }),
    defineField({
      type: "reference",
      name: "user",
      to: [{ type: "user" }],
    }),
    defineField({
      type: "string",
      name: "status",
      options: {
        list: [
          {
            title: "Pending",
            value: "pending",
          },
          {
            title: "Confirmed",
            value: "confirmed",
          },
          {
            title: "Preparing",
            value: "preparing",
          },
          {
            title: "Ready",
            value: "ready",
          },
          {
            title: "Delivered",
            value: "delivered",
          },
        ],
        layout: "radio",
      },
    }),
  ],
});

