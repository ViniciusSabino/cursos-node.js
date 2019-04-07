module.exports = () => {
  const findAll = async (req, res) => {
    const users = await applicationCache.db("users").select();
    res.status(200).json(users);
  };

  const create = async (req, res) => {
    const users = await app.db("users").insert(req.body, "*");
    res.status(201).json(users[0]);
  };

  return { findAll, create };
};
