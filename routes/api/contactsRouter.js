import express from "express";
import {
  addContact,
  deleteContact,
  getAllContacts,
  getContactById,
  updateContact,
  updateStatusContact,
} from "../../controllers/contactsController.js";

const router = express.Router();

router.get("/", getAllContacts);
router.get("/:contactId", getContactById);
router.post("/", addContact);
router.delete("/:contactId", deleteContact);
router.put("/:contactId", updateContact);
router.patch("/:contactId/favorite", updateStatusContact);

export { router };
