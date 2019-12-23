const joi = require('@hapi/joi');

const widgetIdSchema = joi
  .string()
  .hex()
  .length(24);
const widgetCodeSchema = joi
  .number()
  .min(1000)
  .max(3000);
const widgetCoverSchema = joi.string().uri();
const widgetTypeSchema = joi.string();
const widgetSizeSchema = joi.string();
const widgetColorSchema = joi.string();

const createWidgetSchema = joi.object({
  code: widgetCodeSchema.required(),
  cover: widgetCoverSchema.required(),
  type: widgetTypeSchema.required(),
  size: widgetSizeSchema.required(),
  color: widgetColorSchema.required()
});

const updateWidgetSchema = joi.object({
  code: widgetCodeSchema,
  cover: widgetCoverSchema,
  type: widgetTypeSchema,
  size: widgetSizeSchema,
  color: widgetColorSchema
});

module.exports = {
  widgetIdSchema,
  createWidgetSchema,
  updateWidgetSchema
};
