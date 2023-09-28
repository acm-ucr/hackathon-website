export const SHIRTS = ["XS", "S", "M", "L", "XL", "XXL"];

export const GRADES = [
  { name: "Less than Secondary / High School", hidden: false },
  { name: "Secondary / High School", hidden: false },
  { name: "Undergraduate University", hidden: false },
  { name: "Graduate University (Masters, Doctoral, etc)", hidden: false },
  { name: "Code School / Bootcamp", hidden: false },
  { name: "Other Vocational / Trade Program / Apprenticeship", hidden: false },
  { name: "Post Doctorate", hidden: false },
  { name: "I'm not currently a student", hidden: false },
  { name: "Prefer not to answer", hidden: false },
];

export const GENDERS = [
  { name: "Female", hidden: false },
  { name: "Male", hidden: false },
  { name: "Transgender", hidden: false },
  { name: "Nonbinary", hidden: false },
  { name: "Other", hidden: false },
];

export const AGES = [
  { name: "<16", hidden: false },
  { name: "16", hidden: false },
  { name: "17", hidden: false },
  { name: "18", hidden: false },
  { name: "19", hidden: false },
  { name: "20", hidden: false },
  { name: "21", hidden: false },
  { name: "22", hidden: false },
  { name: "23+", hidden: false },
];

export const MAJORS = [
  { name: "Computer Science", hidden: false },
  { name: "Computer Science with Business Applications", hidden: false },
  { name: "Computer Engineering", hidden: false },
  { name: "Data Science", hidden: false },
  { name: "Electrical Engineering", hidden: false },
  { name: "Mechanical Engineering", hidden: false },
  { name: "Environmental Engineering", hidden: false },
  { name: "Chemical Engineering", hidden: false },
  { name: "Other", hidden: false },
];
export const DIETS = {
  vegan: {
    state: false,
    text: "Vegan",
  },
  vegetarian: {
    state: false,
    text: "Vegetarian",
  },
  lactoseIntolerant: {
    state: false,
    text: "Lactose Intolerant",
  },
  nutAllergy: {
    state: false,
    text: "Nut Allergy",
  },
  noGluten: {
    state: false,
    text: "No Gluten",
  },
  halal: {
    state: false,
    text: "Halal",
  },
};

export const REQUIREMENTS = {
  photography: {
    state: false,
    text: "I agree to photograph.",
  },
  inPerson: {
    state: false,
    text: "I understand that I will attend the event in person.",
  },
};
