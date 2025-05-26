const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");

// @desc Get all contacts
// @route GET  /contacts
const getAllContacts = asyncHandler(async(req,res)=>{  
  try{
    const contacts = await Contact.find();
    res.status(200).send(contacts);
  }catch(error){
    res.send(error.message);
  }
});

// @desc Create  a contact
// @route POST  /contacts
const createContact = asyncHandler(async(req,res)=>{
  console.log(req.body);
  const {name,email,phone} = req.body;
  if(!name || !email || !phone){
    return res.status(400).send("필수값이 입력되지 않았습니다")
  }
  const contact = await Contact.create({
    name,
    email,
    phone,
  });
  res.status(201).send("Create Contacts");
});

// @desc Get contact
// @route GET /contact/:id
const getContact = asyncHandler(async(req,res)=>{
  const contact = await Contact.findById(req.params.id);
  res.status(200).send(contact); 
  //res.status(200).send(`View Contact for ID: ${req.params.id}`);
});

// @desc Update contact
// @route PUT /contacts/:id
const updateContact = asyncHandler(async(req,res)=>{
//  res.status(200).send(`Update Contact for ID: ${req.params.id}`);
const id = req.params.id;
const {name, email,phone} = req.body;
const contact = await Contact.findById(id);
if(!contact){
  res.status(404);
  throw new Error("Contact not found");
}
contact.name = name;
contact.email = email;
contact.phone = phone;

contact.save();

res.status(200).json(contact);

});

// @desc Delete contact
// @route DELETE /contact/:id
const deleteContact = asyncHandler(async(req,res)=>{
  res.status(200).send(`Delete Contact for ID: ${req.params.id}`);
});

module.exports = {getAllContacts, createContact, getContact, updateContact, deleteContact};