const express = require('express');
const joi = require('@hapi/joi');
const WidgetsService = require('../services/widgets');
const validationHandler = require('../utils/middlewares/validationHandler');
const cacheResponse = require('../utils/cacheResponse');
const {
  widgetIdSchema,
  createWidgetSchema,
  updateWidgetSchema
} = require('../utils/schemas/widgets');
const router = express.Router();

function widgetsApi(app) {
  const widgetsService = new WidgetsService();
  app.use('/api/widgets', router);

  router.get('/', async (req, res, next) => {
    cacheResponse(res, 30);
    const { tags } = req.query;

    try {
      const widgets = await widgetsService.getWidgets({ tags });
      res.status(200).json({
        data: widgets,
        message: 'Widgets Listed'
      });
    } catch (err) {
      next(err);
    }
  });

  router.get(
    '/:widgetId',
    validationHandler(joi.object({ widgetId: widgetIdSchema }), 'params'),
    async (req, res, next) => {
      cacheResponse(res, 60);
      const { widgetId } = req.params;

      try {
        const widget = await widgetsService.getWidget({ widgetId });
        res.status(200).json({
          data: widget,
          message: 'Widget Retrieved'
        });
      } catch (err) {
        next(err);
      }
    }
  );

  router.post(
    '/',
    validationHandler(createWidgetSchema),
    async (req, res, next) => {
      const { body: widget } = req;
      try {
        const createdWitgetId = await widgetsService.createWidget({ widget });
        res.status(201).json({
          data: createdWitgetId,
          message: 'Widget Created'
        });
      } catch (err) {
        next(err);
      }
    }
  );

  router.put(
    '/:widgetId',
    validationHandler(joi.object({ widgetId: widgetIdSchema }), 'params'),
    validationHandler(updateWidgetSchema),
    async (req, res, next) => {
      const { widgetId } = req.params;
      const { body: widget } = req;

      try {
        const updatedWidgetId = await widgetsService.updateWidget({
          widgetId,
          widget
        });
        res.status(200).json({
          data: updatedWidgetId,
          message: 'Widget Updated'
        });
      } catch (err) {
        next(err);
      }
    }
  );

  router.delete(
    '/:widgetId',
    validationHandler(joi.object({ widgetId: widgetIdSchema })),
    async (req, res, next) => {
      const { widgetId } = req.params;
      try {
        const widgets = await widgetsService.deleteWidget({ widgetId });
        res.status(200).json({
          data: widgets,
          message: 'Widget Deleted'
        });
      } catch (err) {
        next(err);
      }
    }
  );
}

module.exports = widgetsApi;
