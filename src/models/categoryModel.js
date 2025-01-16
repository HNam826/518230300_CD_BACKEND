import mongoose from "mongoose";
const { Schema } = mongoose;

// Định nghĩa Schema
const categorySchema = new Schema(
  {
    code: String,
    name: String,
    image: String,
  },
  {
    versionKey: false,
    collection: "categories", 
  }
);

// Tạo model từ Schema
const CategoryModel = mongoose.model("Category", categorySchema);
export default CategoryModel;
