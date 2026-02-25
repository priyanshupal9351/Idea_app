const idea = require('../model/user.model.js');


/**
 * Controller to fetch all ideas from system
 */
exports.getAllIdeas = (req, res) => {

    // I'll have to read all ideas from idea model file
    res.status(200).send(idea);
}

// Controller to create a new Idea
exports.createIdea = (req, res) =>{

    //increase  id field by server itself
    const newId = idea.length > 0 ? idea[idea.length -1].id + 1 : 1;


    // Get all required fields from req body
    const {idea_name, author_name, idea_description} = req.body;

    // write logic to add new idea in idea model file
    // Read the request body

    const newIdea = {
        id: newId,
        idea_name : idea_name,
        author_name :author_name,
        idea_description: idea_description
    }
    idea.push(newIdea);
    res.status(201).send(newIdea)
    
    
}

// Controller for fetching idea based on Id
exports.getIdeaBasedOnId = (req, res) =>{

    // idea_id = req.params.id;
    // if(idea[idea_id]){

    // }
     // Step 1: Read id from params
    const id = parseInt(req.params.id);

    // Step 2: Find idea in array
    const fetchedIdea = idea.find(i => i.id === id);

    // Step 3: Check exists
    if (fetchedIdea) {
        res.status(200).send(fetchedIdea);
    } else {
        res.status(404).send({
            message: "Idea not found"
        });

    }

}

//Controller to update the idea in idea model
exports.updateIdea = (req, res) => {

    // Logic to update the existing idea

    // Step 1: read id from params
    const id = parseInt(req.params.id);

    // Step 2: find index of existing idea
    const index = idea.findIndex(i => i.id === id);

    //step 3: Check if id exists or not
    if(index !== -1){
        idea[index] = {
            id : id,
            idea_name: req.body.idea_name,
            author_name: req.body.author_name,
            idea_description: req.body.idea_description
        }
        res.status(200).send(idea[index]);
    }else{
        res.status(404).send({
            message : `idea not found`
        })
    }
}

// Controller for deleting an existing idea
exports.deleteIdea = (req, res) => {

    //Step 1: read id from params
    const current_id = parseInt(req.params.id);

    //Step 2: find index of that idea
    const index = idea.findIndex(i => i.id === current_id);

    //Step 3: find is this idea at index exits or not
    if(index !== -1){
        const deletedIdea = idea.splice(index, 1);
        res.status(200).send({
            message : 'idea deleted successfully!'
        })
    }else{
        res.status(404).send({
            message : 'idea not found'
        })
    }
}



