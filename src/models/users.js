const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcrypt = require('bcrypt');

const schema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  is_verify: { type: Boolean, required: true, default: false },
  is_block: { type: Boolean, default: false },
  code_reset_pw: { type: String, required: false },
});

schema.pre('save', async function (next) {
  try {
    if (this.isModified('password')) {
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(_this.password, salt);
      this.password = hash;
    }
    // if(this.isNew){

    // }
  } catch (error) {}
});
