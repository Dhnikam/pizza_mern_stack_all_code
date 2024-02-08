const pizzas = [
  {
    name: "Margherita",
    variants: ["small", "medium", "large"],
    prices: [
      {
        small: 99,
        medium: 199,
        large: 399,
      },
    ],
    category: "veg",
    image: "/images/margherita.jpg",
    description: "Classic delight with 100% real mozzarella cheese",
    cheese: "Regular", // Add cheese property
    sauce: "Marinara", // Add sauce property
  },
  {
    name: "Farmhouse",
    variants: ["small", "medium", "large"],
    prices: [
      {
        small: 229,
        medium: 399,
        large: 599,
      },
    ],
    category: "veg",
    image: "/images/farmhouse.jpg",
    description:
      "Delightful combination of onion, capsicum, tomato & grilled mushroom",
    cheese: "Regular", // Add cheese property
    sauce: "Tomato", // Add sauce property
  },
  {
    name: "Veggie Paradise",
    variants: ["small", "medium", "large"],
    prices: [
      {
        small: 180,
        medium: 290,
        large: 460,
      },
    ],
    category: "veg",
    description:
      "The awesome foursome! Golden corn, black olives, capsicum, red paprika",
    image: "/images/veggie_paradise.jpg",
    cheese: "Regular", // Add cheese property
    sauce: "Pesto", // Add sauce property
  },
  {
    name: "Chicken Golden Delight",
    variants: ["small", "medium", "large"],
    prices: [
      {
        small: 249,
        medium: 349,
        large: 599,
      },
    ],
    category: "nonveg",
    image: "/images/chicken_golden_delight.jpg",
    description:
      "Double pepper barbecue chicken, golden corn and extra cheese, true delight",
    cheese: "Extra", // Add cheese property
    sauce: "Barbecue", // Add sauce property
  },
  {
    name: "Chicken Pepperoni",
    variants: ["small", "medium", "large"],
    prices: [
      {
        small: 320,
        medium: 580,
        large: 800,
      },
    ],
    category: "nonveg",
    image: "/images/cheesepepperoni.jpg",
    description:
      "A classic American taste! Relish the delectable flavor of Chicken Pepperoni, topped with extra cheese",
    cheese: "Extra", // Add cheese property
    sauce: "Tomato", // Add sauce property
  },
  {
    name: "Indi Chicken Tikka",
    variants: ["small", "medium", "large"],
    prices: [
      {
        small: 250,
        medium: 380,
        large: 500,
      },
    ],
    category: "nonveg",
    image: "/images/IndianTandooriChickenTikka.jpg",
    description:
      "The wholesome flavour of tandoori masala with Chicken tikka, onion, red paprika & mint mayo",
    cheese: "Taco", // Add cheese property
    sauce: "Parmesan", // Add sauce property
  },
];

module.exports = pizzas;
