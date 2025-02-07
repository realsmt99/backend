/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xpfdvaaqme1cyb6")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "8n4wnmh4",
    "name": "address",
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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xpfdvaaqme1cyb6")

  // remove
  collection.schema.removeField("8n4wnmh4")

  return dao.saveCollection(collection)
})
