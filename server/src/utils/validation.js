const isEditDataValidated = (data) => {
  const allowedFields = ["firstName", "lastName", "profile", "about", "skills"];
  return Object.keys(data).every((field) => allowedFields.includes(field));
};
const isChangePasswordData = (data) => {
  const allowedFields = ["currentPassword", "newPassword"];
  return Object.keys(data).every((field) => allowedFields.includes(field));
};
const isSendRequestValidated = (params, fromUser) => {
  const { status, id } = params;
  const allowedFields = ["interested", "ignored"];
  if (!allowedFields.includes(status)) {
    return false;
  }
  if (fromUser._id.equals(id)) {
    throw new Error("You can't send request to yourself!!");
  }
  return true;
};
const isReviewRequestValidated = (status) => {
  const allowedFields = ["accepted", "rejected"];
  if (!allowedFields.includes(status)) {
    return false;
  }
  return true;
};
module.exports = {
  isEditDataValidated,
  isChangePasswordData,
  isSendRequestValidated,
  isReviewRequestValidated,
};
