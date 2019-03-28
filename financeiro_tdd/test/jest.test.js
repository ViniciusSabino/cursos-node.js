test("Devo conheçer as principais assertivas do jest", () => {
  const example = "Hello World";
  expect(example).toEqual("Hello World");

  const otherExample = "Hello World";
  expect(otherExample).not.toEqual("Hello Worlds");

  const number = 10;
  expect(number).toBeGreaterThan(9); // Espero que 'number' seja maior que 9
  expect(number).toBeLessThan(11); // Espero que 'number' seja menor que 11
});

test("Devo saber trabalhar com objetos", () => {
  const objeto = { name: "Vinicius", email: "vnc.chelsea@gmail.com" };

  expect(objeto).toHaveProperty("name"); // Espero que 'objeto' tenha a propriedade 'name'
  expect(objeto).toHaveProperty("name", "Vinicius"); // Espero que 'objeto' tenha a propriedade 'name' e com o valor de 'Vinicius'
});
