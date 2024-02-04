import express from "express";
import { Info } from '../models/infoModel.js'

const router = express.Router()

// Route for Save a new Info
router.post('/', async (request, response) => {
    try {
      if (
        !request.body.name ||
        !request.body.gender ||
        !request.body.age ||
        !request.body.country
      ) {
        return response.status(400).send({
          message: 'Send all required fields: name, gender, age, country',
        });
      }
      const newInfo = {
        name: request.body.name,
        gender: request.body.gender,
        age: request.body.age,
        country: request.body.country
      };
  
      const info = await Info.create(newInfo);
  
      return response.status(201).send(info);
    } catch (error) {
      console.log(error.message);
      response.status(500).send({ message: error.message });
    }
  });

// Route for Get All Books from database
router.get('/', async (request, response) => {
    try {
      const info = await Info.find({});
  
      return response.status(200).json({
        count: info.length,
        data: info,
      });
    } catch (error) {
      console.log(error.message);
      response.status(500).send({ message: error.message });
    }
  });

// Route for Get One Book from database by id
router.get('/:id', async (request, response) => {
    try {
      const { id } = request.params;
  
      const info = await Info.findById(id);
  
      return response.status(200).json(info);
    } catch (error) {
      console.log(error.message);
      response.status(500).send({ message: error.message });
    }
  });

// Route for Update a Book
router.put('/:id', async (request, response) => {
    try {
      if (
        !request.body.name ||
        !request.body.gender ||
        !request.body.age ||
        !request.body.country
      ) {
        return response.status(400).send({
          message: 'Send all required fields: name, gender, age, country',
        });
      }
  
      const { id } = request.params;
  
      const result = await Info.findByIdAndUpdate(id, request.body);
  
      if (!result) {
        return response.status(404).json({ message: 'Info not found' });
      }
  
      return response.status(200).send({ message: 'Info updated successfully' });
    } catch (error) {
      console.log(error.message);
      response.status(500).send({ message: error.message });
    }
  });

// Route for Delete a book
router.delete('/:id', async (request, response) => {
    try {
      const { id } = request.params;
  
      const result = await Info.findByIdAndDelete(id);
  
      if (!result) {
        return response.status(404).json({ message: 'Info not found' });
      }
  
      return response.status(200).send({ message: 'Info deleted successfully' });
    } catch (error) {
      console.log(error.message);
      response.status(500).send({ message: error.message });
    }
  });

  export default router;