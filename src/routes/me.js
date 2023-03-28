const app = require('express');
const router = app.Router();

const meControllers = require('../app/controllers/MeController');

router.get('/stored/courses', meControllers.storedCourses);

module.exports = router;
