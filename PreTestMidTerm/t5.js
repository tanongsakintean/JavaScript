const getBudgets = (persons) => {
  let summary = 0;
  /// old
  // persons.forEach((per, key) => {
  //   summary += per.budget;
  // });
  ///N new
  summary = persons.map((per) => per.budget).reduce((n1, n2) => n1 + n2);
  console.log(summary);
};

getBudgets([
  {
    name: "John",
    age: 21,
    budget: 23000,
  },
  {
    name: "Steve",
    age: 32,
    budget: 40000,
  },
  {
    name: "Marin",
    age: 16,
    budget: 2700,
  },
]); //=>65700

getBudgets([
  {
    name: "John",
    age: 21,
    budget: 29000,
  },
  {
    name: "Steve",
    age: 32,
    budget: 32000,
  },
  {
    name: "Marin",
    age: 16,
    budget: 1600,
  },
]); // =>62600
