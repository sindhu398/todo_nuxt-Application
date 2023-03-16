export default function(req, res) {
    const { name, email, password } = req.body
  
    // TODO: Save user to database
  
    res.json({ message: 'Registration successful' })
  }
  