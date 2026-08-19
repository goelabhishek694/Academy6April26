import Theatre from '../model/theatre.js';

export const addTheatre = async(req, res) => {
    try{
        const theatre = await Theatre.create({
            ...req.body,
            owner: req.userId,
            isActive: false,
        });
        res.send({
            success: true,
            message: 'Theatre added successfully',
            data:theatre,
        })
    }catch(err){
        res.send({
            success: false,
            message: err.message,
        })
    }
}

export const getPartnerTheatres = async(req, res) => {
    try{
        const theatres = await Theatre.find({owner: req.userId}).sort({createdAt: -1});
        res.send({
            success: true,
            message: 'Theatres fetched successfully',
            data:theatres,
        })
    }catch(err){
        res.send({
            success: false,
            message: err.message,
        })
    }
}

export const getAllTheatres = async(req, res) => {
    try{
        const theatres = await Theatre.find().sort({createdAt: -1}).populate("owner", "name email role");
        res.send({
            success: true,
            message: 'Theatres fetched successfully',
            data:theatres,
        })
    }catch(err){
        res.send({
            success: false,
            message: err.message,
        })
    }
}

export const approveTheatre = async(req, res) => {
    try{
        const {theatre_id} = req.params;
        console.log("hello456",theatre_id, req.body);

        const theatre = await Theatre.findByIdAndUpdate(theatre_id, req.body);
        res.send({
            success: true,
            message: 'Theatre updated successfully',
        })
    }catch(err){
        res.send({
            success: false,
            message: err.message,
        })
    }
}