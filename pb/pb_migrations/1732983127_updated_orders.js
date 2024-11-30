/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5mn1nxatzjqgegm")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "kn7d92vp",
    "name": "trackingNumber",
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
  const collection = dao.findCollectionByNameOrId("5mn1nxatzjqgegm")

  // remove
  collection.schema.removeField("kn7d92vp")

  return dao.saveCollection(collection)
})
