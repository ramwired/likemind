const mongoose = require("mongoose");
const validator = require("validator");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const JWT_SECRET = process.env.JWT_SECRET;

const userSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      minLength: 2,
      maxLength: 30,
      trim: true,
    },
    lastName: {
      type: String,
      maxLength: 30,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      validate(value) {
        if (!validator.isStrongPassword(value)) {
          throw new Error("Enter a strong password");
        }
      },
    },
    emailId: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error("Invalid email");
        }
      },
    },
    headline: {
      type: String,
      maxLength: 80,
      trim: true,
    },
    dob: {
      type: Date,
      required: true,
    },
    gender: {
      type: String,
      enum: ["male", "female", "others"],
      required: true,
    },
    location: {
      type: String,
      maxLength: 50,
      trim: true,
    },
    profile: {
      type: String,
      default:
        "https://i.pinimg.com/236x/47/29/8f/47298fa216d3b8589663aaabbd0fef80.jpg",
      trim: true,
    },
    coverPhoto: {
      type: String,
      default:
        "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=400&auto=format&fit=crop",
      trim: true,
    },
    about: {
      type: String,
      maxLength: 500,
      trim: true,
    },
    skills: {
      type: [
        {
          type: String,
          maxLength: 50,
          trim: true,
        },
      ],
      validate: [
        (val) => val.length >= 6 && val.length <= 50,
        "You must select between 6 and 50 skills.",
      ],
    },
    vibe: {
      lookingFor: {
        type: String,
        maxLength: 35,
        trim: true,
        default: "Connecting with new people",
      },
      listeningToTrack: {
        type: String,
        maxLength: 40,
        trim: true,
        default: "",
      },
      listeningToArtist: {
        type: String,
        maxLength: 40,
        trim: true,
        default: "",
      },
      statusColor: {
        type: String,
        enum: ["bg-[#fb4b4e]", "bg-amber-400", "bg-emerald-400", "bg-blue-400"],
        default: "bg-[#fb4b4e]",
      },
    },
    prompt: {
      question: {
        type: String,
        maxLength: 40,
        trim: true,
      },
      answer: {
        type: String,
        maxLength: 100,
        trim: true,
      },
    },
    photos: {
      type: [
        {
          type: String,
        },
      ],
      validate: [
        (val) => val.length <= 8,
        "You can only upload up to 8 photos.",
      ],
    },
  },
  {
    timestamps: true,
  },
);
userSchema.methods.getJWT = function () {
  return jwt.sign({ _id: this._id }, JWT_SECRET);
};
userSchema.methods.validatePassword = async function (password) {
  const isValid = await bcrypt.compare(password, this.password);
  return isValid;
};
module.exports = mongoose.model("User", userSchema);
