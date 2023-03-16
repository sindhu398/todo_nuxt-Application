const todos = []

export default function(req, res) {
  if (req.method === 'GET') {
    res.json({ data: todos })
  } else if (req.method === 'POST') {
    const { title } = req.body
    const todo = { id: todos.length + 1, title }
    todos.push(todo)
    res.json({ data: todo })
  } else if (req.method === 'DELETE') {
    const id = parseInt(req.params.id)
    const index = todos.findIndex(todo => todo.id === id)
    if (index !== -1) {
      todos.splice(index, 1)
      res.json({})
    } else {
      res.status(404).json({ message: 'Todo not found' })
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' })
  }
}
