const User = require("../models/User");
const Product = require("../models/Product");
const Order = require("../models/Order");

const createOrder = async (request, response) => {
  try {
    const { user, products} = request.body;

    if(!products || products.length ===0){
        return response.status(400).json({
            success:false,
            message:'There are no products'
        })
    }

    let totalPrice = 0;

    const newOrder = await Order.create({
        user:user,
        products: products.map((p) => ({
            product:p.product,
            quantity:p.quantity
        })),
        totalPrice
    })

    response.status(201).json({
        success:true,
        message:"Order placed successfully",
        data:newOrder
    })

  } catch (error) {
    return response.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
const getAllOrders = async (request, response) => {
  try {
    const orders = await Order.find();
    response.status(200).json({
        success:true,
        message:'Orders fetched successfully',
        data:{
            orders:orders
        }
    })
  } catch (error) {
    return response.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
const getOrderById = async (request, response) => {
  try {
    const {id}= request.params;
    const order = await Order.findById(id)
    if(!order){
        return response.status(404).json({
            success:false,
            message:'Order not found'
        })
    }
    response.status(200).json({
        success:true,
        message:'Order fetched successfully',
        data:{
            order:order
        }
    })
  } catch (error) {
    return response.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
const updateOrderById = async (request, response) => {
  try {
  } catch (error) {
    return response.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
const deleteOrderById = async (request, response) => {
  try {
  } catch (error) {
    return response.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createOrder,
  getAllOrders,
  getOrderById,
  updateOrderById,
  deleteOrderById
};
