import { defineType, defineField } from "sanity";

const business = defineType({
	name: "business",
	title: "Business",
	type: "document",

	fields: [
		defineField({
			name: "name",
			title: "Name",
			type: "string",
			description: "The name of the business",
			validation: (Rule) => Rule.required(),
		}),

		defineField({
			name: "description",
			title: "Description",
			type: "text",
			description: "A description of the business",
			validation: (Rule) => Rule.required(),
		}),

		defineField({
			name: "logo",
			title: "Logo",
			type: "image",
			description: "The logo of the business",
			validation: (Rule) => Rule.required(),
		}),

		defineField({
			name: "cover",
			title: "Cover",
			type: "image",
			description: "The cover image of the business",
		}),

	],
});

export default business;
