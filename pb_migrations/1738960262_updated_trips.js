/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2dmb4e1tmwx53e1")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "8vmpdaqk",
    "name": "stations",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "03d9b9bwb3auw0p",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2dmb4e1tmwx53e1")

  // remove
  collection.schema.removeField("8vmpdaqk")

  return dao.saveCollection(collection)
})
