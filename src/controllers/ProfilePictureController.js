class PictureProfileController {
  async store(req, res) {
    res.status(200).json(req.file);
  }
}

export default new PictureProfileController();
