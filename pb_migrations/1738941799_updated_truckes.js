/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2llkpu3ca9z7obx")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "utwprvwp",
    "name": "plate_number",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "bntzojzi",
    "name": "status",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "available",
        "assigned",
        "in_transit"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2llkpu3ca9z7obx")

  // remove
  collection.schema.removeField("utwprvwp")

  // remove
  collection.schema.removeField("bntzojzi")

  return dao.saveCollection(collection)
})
