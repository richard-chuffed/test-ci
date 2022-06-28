export const titleJSON = [
  {
    id: "title",
    label: "Full name",
    placeholder: "Enter full name",
    type: "text",
    validationType: "string",
    value: "User name",
    validations: [
      {
        type: "required",
        params: ["this field is required"],
      },
      {
        type: "min",
        params: [5, "name cannot be less than 5 characters"],
      },
      {
        type: "max",
        params: [10, "name cannot be more than 10 characters"],
      },
    ],
  }
];

export const perkJSON = [
    {
      id: "perk",
      label: "Full name",
      placeholder: "Enter full name",
      type: "text",
      validationType: "string",
      value: "User name",
      validations: [
        {
          type: "required",
          params: ["this field is required"],
        },
        {
          type: "min",
          params: [5, "name cannot be less than 5 characters"],
        },
        {
          type: "max",
          params: [10, "name cannot be more than 10 characters"],
        },
      ],
    }
  ];

export const formJSON = [
  {
    type: "text",
    name: "first_name",
    label: "First Name ",
    placeholder: "i.e Joe",
    classes: "text-pink-500",
    required: true,
    defaultValue: "",
    watch: true,
    validationType: "string",
    validations: [
      {
        type: "required",
        params: ["this field is required"],
      },
      {
        type: "min",
        params: [5, "name cannot be less than 5 characters"],
      },
      {
        type: "max",
        params: [10, "name cannot be more than 10 characters"],
      },
    ],
  },
  {
    type: "text",
    name: "first_name",
    label: "First Name ",
    placeholder: "i.e Joe",
    classes: "text-pink-500",
    required: true,
    defaultValue: "",
    watch: true,
    validationType: "string",
    validations: [
      {
        type: "required",
        params: ["this field is required"],
      },
      {
        type: "min",
        params: [5, "email cannot be less than 5 characters"],
      },
      {
        type: "max",
        params: [10, "email cannot be more than 10 characters"],
      },
      {
        type: "email",
        params: ["please enter a valid email"],
      },
    ],
  },
  {
    name: "phoneNumber",
    label: "phone number",
    type: "text",
    validationType: "number",
    validations: [
      {
        type: "min",
        params: [10, "phone number cannot be less than 10 characters"],
      },
      {
        type: "max",
        params: [10, "phone number cannot be more than 10 characters"],
      },
      {
        type: "required",
        params: ["phone number is required"],
      },
    ],
  },
];
