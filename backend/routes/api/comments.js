/**
 * @module routes/api/comments
 * @description Express router for handling comment-related API endpoints.
 */

 /**
  * POST /
  * @summary Create a new comment.
  * @param {Object} req.body - The comment data to create.
  * @returns {Object} 201 - Created comment object.
  * @returns {Object} 400 - Error object if creation fails.
  */

 /**
  * GET /
  * @summary Retrieve all comments.
  * @returns {Array<Object>} 200 - Array of comment objects.
  * @returns {Object} 500 - Error object if retrieval fails.
  */

 /**
  * GET /:id
  * @summary Retrieve a single comment by its ID.
  * @param {string} req.params.id - The ID of the comment to retrieve.
  * @returns {Object} 200 - The requested comment object.
  * @returns {Object} 404 - If comment not found.
  * @returns {Object} 500 - Error object if retrieval fails.
  */

 /**
  * PATCH /:id
  * @summary Update a comment by its ID.
  * @param {string} req.params.id - The ID of the comment to update.
  * @param {Object} req.body - The updated comment data.
  * @returns {Object} 200 - The updated comment object.
  * @returns {Object} 404 - If comment not found.
  * @returns {Object} 400 - Error object if update fails.
  */

 /**
  * DELETE /:id
  * @summary Delete a comment by its ID.
  * @param {string} req.params.id - The ID of the comment to delete.
  * @returns {Object} 200 - The deleted comment object.
  * @returns {Object} 404 - If comment not found.
  * @returns {Object} 500 - Error object if deletion fails.
  */
// Hey GitHub Copilot, can you help me implement the API endpoints for comments?


const router = require("express").Router();
const mongoose = require("mongoose");
const Comment = mongoose.model("Comment");

// Create a new comment
router.post("/", async (req, res) => {
  try {
    const comment = new Comment(req.body);
    await comment.save();
    res.status(201).send(comment);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Get all comments
router.get("/", async (req, res) => {
  try {
    const comments = await Comment.find();
    res.status(200).send(comments);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Get a single comment by ID
router.get("/:id", async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.id);
    if (!comment) {
      return res.status(404).send();
    }
    res.status(200).send(comment);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Update a comment by ID
router.patch("/:id", async (req, res) => {
  try {
    const comment = await Comment.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!comment) {
      return res.status(404).send();
    }
    res.status(200).send(comment);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Delete a comment by ID
router.delete("/:id", async (req, res) => {
  try {
    const comment = await Comment.findByIdAndDelete(req.params.id);
    if (!comment) {
      return res.status(404).send();
    }
    res.status(200).send(comment);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
