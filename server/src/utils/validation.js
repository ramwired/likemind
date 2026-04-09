const isEditDataValidated = (data) => {
  const allowedFields = [
    "firstName",
    "lastName",
    "profile",
    "about",
    "skills",
    "dob",
  ];
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

const ageValidation = (dob) => {
  const date = new Date();
  const age = date.getFullYear() - dob.getFullYear();
  const month = date.getMonth() - dob.getMonth();
  const day = date.getDay() - dob.getDay();

  if (month > 0 || (month == 0 && day >= 0)) {
    age++;
  }

  if (age < 18) return false;

  return true;
};

module.exports = {
  isEditDataValidated,
  isChangePasswordData,
  isSendRequestValidated,
  isReviewRequestValidated,
  ageValidation,
};
