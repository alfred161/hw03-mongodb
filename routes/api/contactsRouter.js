import express from "express";
import {
  addContact,
  deleteContact,
  getAllContacts,
  getContactById,
  updateContact,
} from "../../controllers/contactsController.js";

const router = express.Router();

router.get("/", getAllContacts);
router.get("/:contactId", getContactById);
router.post("/", addContact);
router.delete("/:contactId", deleteContact);
router.put("/:contactId", updateContact);

export { router };
