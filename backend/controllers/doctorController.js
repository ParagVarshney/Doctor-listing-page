const doctors = require("../data/doctors");

// Get all doctors (optionally filter by query)
const getDoctors = (req, res) => {
  const { speciality, location, name } = req.query;
  let results = doctors;

  if (speciality) {
    results = results.filter(doc =>
      doc.speciality.toLowerCase().includes(speciality.toLowerCase())
    );
  }

  if (location) {
    results = results.filter(doc =>
      doc.location.toLowerCase().includes(location.toLowerCase())
    );
  }

  if (name) {
    results = results.filter(doc =>
      doc.name.toLowerCase().includes(name.toLowerCase())
    );
  }

  res.json(results);
};

module.exports = { getDoctors };

