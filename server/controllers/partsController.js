import { db } from '../db/connection.js';

export const getAllParts = (req, res) => {
  db.query('SELECT * FROM parts', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};
//dimiourgia antallaktikou
export const createPart = (req, res) => {
    const { part_code, mli_code, description, category, quantity, price } = req.body;
  
    const sql = `
      INSERT INTO parts (part_code, mli_code, description, category, quantity, price)
      VALUES (?, ?, ?, ?, ?, ?)
    `;
  
    db.query(sql, [part_code, mli_code, description, category, quantity, price], (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      res.status(201).json({ message: "Part added successfully", partId: result.insertId });
    });
  };
//antallaktiko apo id
  export const getPartById = (req, res) => {
    const { id } = req.params;
  
    db.query('SELECT * FROM parts WHERE id = ?', [id], (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      if (results.length === 0) return res.status(404).json({ message: 'Part not found' });
  
      res.json(results[0]);
    });
  };