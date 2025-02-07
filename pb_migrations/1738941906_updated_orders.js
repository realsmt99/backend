/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xpfdvaaqme1cyb6")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "iiwphh20",
    "name": "status",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "pending",
        "in_progress",
        "delivered"
      ]
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "b4fnfgvy",
    "name": "client_id",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "t3w54uout8f8o8p",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xpfdvaaqme1cyb6")

  // remove
  collection.schema.removeField("iiwphh20")

  // remove
  collection.schema.removeField("b4fnfgvy")

  return dao.saveCollection(collection)
})
