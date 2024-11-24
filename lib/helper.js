export const getOtherMember = (members, userId) => {
  return members.find((member) => member._id.toString() !== userId.toString());
};

export const deletFilesFromCloudinary = async (public_ids) => {
  // Delete files from cloudinary
};
