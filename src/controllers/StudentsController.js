import Student from '../models/Student';

class StudentsController {
  async show(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ['ID não informado'],
        });
      }

      const student = await Student.findByPk(id);

      if (!student) {
        return res.status(400).json({
          errors: ['estudante não encontrado(a)'],
        });
      }

      return res.status(200).json({ student });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((erro) => erro.message),
      });
    }
  }

  async store(req, res) {
    try {
      const student = await Student.create(req.body);

      const { id, name, lastname, email, idade } = student;

      return res.status(201).json({ id, name, lastname, email, idade });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((erro) => erro.message),
      });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ['ID não informado'],
        });
      }

      const student = await Student.findByPk(id);

      if (!student) {
        return res.status(400).json({
          errors: ['estudante não encontrado(a)'],
        });
      }

      const updatedData = await student.update(req.body);

      const { name, lastname, email, idade } = updatedData;

      return res.status(201).json({ id, name, lastname, email, idade });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((erro) => erro.message),
      });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ['ID não informado'],
        });
      }

      const student = await Student.findByPk(id);

      if (!student) {
        return res.status(400).json({
          errors: ['estudante não encontrado(a)'],
        });
      }

      await student.destroy();

      return res
        .status(200)
        .json({ msg: 'os registros do estudante foram apagados' });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((erro) => erro.message),
      });
    }
  }
}

export default new StudentsController();
