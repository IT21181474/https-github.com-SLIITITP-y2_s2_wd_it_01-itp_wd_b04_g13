const Package = require("../models/package.model");

const addPackage = async (req, res) => {
    const { packageId,item,category,specialNotes,acceptedDate,acceptedTime,customerName,address,phone, lostAndFound,lostPlace,lostDate,lostTime} =
      req.body;
  
    const newPackage = new Package({
        packageId,
        item,
        category,
        specialNotes,
        acceptedDate,
        acceptedTime,
        customerName,
        address,
        phone,
        lostAndFound,
        lostPlace,
        lostDate,
        lostTime
    });
  
    await newPackage
      .save()
      .then(() => res.json('Package added!'))
      .catch((error) => res.status(400).json("Error: " + error));
  };

  const getPackages = async (req, res) => {
    try {
      const package = await Package.find();
      res.json(package);
    } catch (error) {
      res.status(500).send("Server Error" + error);
    }
  };

  const getPackageById = async (req, res) => {
    try {
      const package = await Package.findById(req.params.id);
      res.json(package);
    } catch (error) {
      res.status(500).send("Server Error" + error);
    }
  };

  const updatePackage = async (req, res) => {
    Package.findByIdAndUpdate(req.params.id)
      .then((existingPackage) => {
        existingPackage.packageId = req.body.packageId;
        existingPackage.item = req.body.item;
        existingPackage.category = req.body.category;
        existingPackage.specialNotes = req.body.specialNotes;
        existingPackage.acceptedDate = req.body.acceptedDate;
        existingPackage.acceptedTime = req.body.acceptedTime;
        existingPackage.customerName = req.body.customerName;
        existingPackage.address = req.body.address;
        existingPackage.phone = req.body.phone;
        existingPackage.lostAndFound = req.body.lostAndFound;
        existingPackage.lostPlace = req.body.lostPlace;
        existingPackage.lostDate = req.body.lostDate;
        existingPackage.lostTime = req.body.lostTime;
        
        existingPackage
          .save()
          .then(() => res.json('Package Updated!'))
          .catch((error) => res.status(400).json("Error: " + error));
      })
      .catch((error) => res.status(400).json("Error: " + error));
  };
  
//   const addResponse = async (req, res) => {
//     Feedback.findByIdAndUpdate(req.params.id)
//       .then((existingFeedback) => {
//         existingFeedback.course = req.body.course;
//         existingFeedback.student = req.body.student;
//         existingFeedback.rating = req.body.rating;
//         existingFeedback.feedback = req.body.feedback;
//         existingFeedback.response = req.body.response;
        
//         existingFeedback
//           .save()
//           .then(() => res.json('Response Added!'))
//           .catch((error) => res.status(400).json("Error: " + error));
//       })
//       .catch((error) => res.status(400).json("Error: " + error));
//   };

  const deletePackage = async (req, res) => {
    Package.findByIdAndDelete(req.params.id)
      .then((deletedPackage) => {
        res.json('Package deleted');
      })
      .catch((error) => res.status(400).json("Error: " + error));
  };

  
  module.exports = {
    addPackage,
    getPackages,
    getPackageById,
    updatePackage,
    deletePackage
  
  }