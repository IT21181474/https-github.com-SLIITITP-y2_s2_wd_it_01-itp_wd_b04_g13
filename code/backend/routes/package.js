const router = require('express').Router();
const { response } = require('express');
let Package = require("../models/package.model");

const {
    addPackage,
    getPackages,
    updatePackage,
    getPackageById,
    deletePackage
   
  } = require("../controller/package.controller");

  router.post("/", addPackage);

  router.get("/", getPackages);

  router.get("/:id", getPackageById);

  router.put("/:id", updatePackage);

  router.delete("/:id", deletePackage);

module.exports = router;