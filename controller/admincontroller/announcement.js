import Offer from "../../model/offerSchema.js"
import Announcement from "../../model/announcementSchema.js"
export const createOffer = async (req, res, next) => {
  console.log('ok', req.body);
   const newOffer = new Offer(req.body);
   try {
    const savednewoffer = await newOffer.save();
    console.log(savednewoffer);
    
    res.status(200).json(savednewoffer)
   } catch (error) {
    console.log(error);
   }
};
export const getAllOffers = async (req, res, next) => {
  try {
    const allOffers = await Offer.find();
    res.status(200).json(allOffers);
  } catch (error) {
    res.status(500).json(error);
  }
};
export const editOfferById = async (req, res, next) => {
  const toEditId = req.params.id;
  try {
    const updatedOffers = await Offer.findByIdAndUpdate(
      toEditId,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedOffers);
  } catch (error) {
    res.status(500).json(error);
  }
};
export const deleteOfferById = async (req, res, next) => {
  const offerId = req.params.id;
  try {
    await Offer.findByIdAndDelete(offerId);
    res.status(200).json("Service has been deleted");
  } catch (error) {
    res.status(500).json(err);
  }
};
export const createAnnouncement = async (req, res, next) => {
  console.log('ok', req.body);
   const newAnnouncement = new Announcement(req.body);
   try {
    const savednewannouncement = await newAnnouncement.save();
    console.log(savednewannouncement);
    
    res.status(200).json(savednewannouncement)
   } catch (error) {
    console.log(error);
   }
};
export const getAllAnnouncements = async (req, res, next) => {
  try {
    const allAnnouncements = await Announcement.find();
    res.status(200).json(allAnnouncements);
  } catch (error) {
    res.status(500).json(error);
  }
};
export const editAnnouncementById = async (req, res, next) => {
  const toEditId = req.params.id;
  try {
    const updatedAnnouncements = await Announcement.findByIdAndUpdate(
      toEditId,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedAnnouncements);
  } catch (error) {
    res.status(500).json(error);
  }
};
export const deleteAnnouncementById = async (req, res, next) => {
  const announcementId = req.params.id;
  try {
    await Offer.findByIdAndDelete(announcementId);
    res.status(200).json("Service has been deleted");
  } catch (error) {
    res.status(500).json(err);
  }
};
