const Product = require("../models/Product");

const createProduct = async (request, response) => {
  const { title, description, price, stock } = request.body;

  if (!title || !description || !price || !stock) {
    return response.status(400).json({
      success: false,
      message: "All fields are required",
    });
  }

  const product = await Product.findOne({ title })
  if(product){
    return response.status(400).json({
        success:false,
        message:'Product already exists'
    })
  }

  try {
    const newProduct = await Product.create({
      title,
      description,
      price,
      stock,
    });

    response.status(201).json({
      success: true,
      message: "Product created successfully",
      data: {
        product: {
          title: newProduct.title,
          description: newProduct.description,
          price: newProduct.price,
          stock: newProduct.stock,
        },
      },
    });
  } catch (error) {
    return response.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getAllProducts = async (request, response) => {
  try {
    const products = await Product.find();

    if (!products) {
      return response.status(404).json({
        success: false,
        message: "Products not found",
      });
    }

    response.status(200).json({
      success: true,
      message: "Products fetched successfully",
      data: {
        products: products,
      },
    });
  } catch (error) {
    return response.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getProductById = async (request, response) => {
  try {
    const { id } = request.params;

    const product = await Product.findById(id);
    if (!product) {
      return response.status(404).json({
        success: false,
        message: "Product not found",
      });
    }
    response.status(200).json({
      success: true,
      message: "Products fetched successfully",
      data: {
        product: product,
      },
    });
  } catch (error) {
    return response.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const updateProductById = async (request, response) => {
  try {
    const {id} = request.params;
    const { title, description, price, stock } = request.body;

    const updatedProduct = await Product.findByIdAndUpdate(id, { title, description, price, stock}, {new:true})

    response.status(200).json({
        success:true,
        message:'Product updated successfully',
        data:{
            product: updatedProduct
        }
    })
  } catch (error) {
    return response.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const deleteProductById = async (request, response) => {
  try {
    const {id} = request.params;
    const deletedProduct = await Product.findByIdAndDelete(id);
    response.status(200).json({
        success:true,
        message:'Product deleted successfully'
    })
  } catch (error) {
    return response.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProductById,
  deleteProductById,
};
