class HomeController {
  index(req, res) {
    res.status(200).json({ msg: 'alive' });
  }
}

export default new HomeController();
