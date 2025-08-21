export const getDashboard = (req, res) => {
  try {
    res.json({ message: `Welcome ${req.user.name}` }); 
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};
