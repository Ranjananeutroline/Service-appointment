import Service from "../../model/serviceSchema.js";
export const createService = async (req, res, next) => {
  console.log('ok');
  const newService = new Service(req.body);
  console.log(req.body);
  // console.log(newService);
  try {
    const savednewservice = await newService.save();
    console.log(savednewservice);
    res.status(200).json( savednewservice );
  } catch (error) {
    next(error);
  }
};

export const getAllServices = async (req, res, next) => {
  try {
    const allServices = await Service.find();
    res.status(200).json(allServices);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getServiceById = async (req, res, next) => {
  const searchId = req.params.id;
  try {
    const service = await Service.findById(searchId);
    res.status(200).json(service);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const editServiceById = async (req, res, next) => {
  const toEditId = req.params.id;
  try {
    const updatedServices = await Service.findByIdAndUpdate(
      toEditId,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedServices);
  } catch (error) {
    res.status(500).json(error);
  }
};
export const deleteServiceById = async (req, res, next) => {
  const serviceId = req.params.id;
  try {
    await Service.findByIdAndDelete(serviceId);
    res.status(200).json("Service has been deleted");
  } catch (error) {
    res.status(500).json(err);
  }
};
