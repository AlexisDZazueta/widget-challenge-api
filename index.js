const express = require('express');
const app = express();

const { config } = require('./config');
const {
  logErrors,
  wrapError,
  errorHandler
} = require('./utils/middlewares/errorHandler');
const notFoundHandler = require('./utils/middlewares/notFoundHandler');

const widgetsApi = require('./routes/widgets');

// Body Parser
app.use(express.json());

// Routes
widgetsApi(app);

// Catch 404
app.use(notFoundHandler);

// Error Middlewares
app.use(logErrors);
app.use(wrapError);
app.use(errorHandler);

app.listen(config.port, () => {
  console.log(`Listening on http://localhost:${config.port}`);
});
