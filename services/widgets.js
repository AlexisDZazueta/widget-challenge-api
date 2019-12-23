const MongoLib = require('../lib/mongo');

class WidgetsService {
  constructor() {
    this.collection = 'widgets';
    this.mongoDB = new MongoLib();
  }

  async getWidgets({ tags }) {
    const query = tags && { tags: { $in: tags } };
    const widgets = await this.mongoDB.getAll(this.collection, query);
    return widgets || [];
  }

  async getWidget({ widgetId }) {
    const widget = await this.mongoDB.get(this.collection, widgetId);
    return widget || {};
  }

  async createWidget({ widget }) {
    const createdWidgetId = await this.mongoDB.create(this.collection, widget);
    return createdWidgetId;
  }

  async updateWidget({ widgetId, widget } = {}) {
    const updatedWidgetId = await this.mongoDB.update(
      this.collection,
      widgetId,
      widget
    );
    return updatedWidgetId;
  }

  async deleteWidget({ widgetId }) {
    const deletedWidgetId = await this.mongoDB.delete(
      this.collection,
      widgetId
    );
    return deletedWidgetId;
  }
}

module.exports = WidgetsService;
