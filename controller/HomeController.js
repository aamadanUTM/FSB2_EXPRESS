export const getHome = (req, res) => {
  res.send("GET request to the homepage");
};

export const postHome = (req, res) => {
  const { name, phone, email } = req.body;
  console.log(`Name: ${name}, Phone: ${phone}, Email: ${email}`);
  res.send("POST request to the homepage");
};
