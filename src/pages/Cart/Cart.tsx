import React from "react";

const Cart: React.FC = () => {
  return (
    <section className="min-h-screen bg-gray-200 flex items-center justify-center py-5">
      <div className="container mx-auto">
        <div className="flex justify-center items-center h-full">
          <div className="w-full lg:w-10/12">
            <div className="bg-white shadow-md rounded-lg">
              <div className="p-4">
                <div className="flex flex-col lg:flex-row lg:space-x-8">
                  <div className="lg:w-7/12">
                    <h5 className="mb-3">
                      <a
                        href="#"
                        className="text-gray-700 hover:text-gray-900 flex items-center"
                      >
                        <i className="fas fa-long-arrow-alt-left mr-2" />{" "}
                        Continue shopping
                      </a>
                    </h5>
                    <hr className="border-t border-gray-300" />

                    <div className="flex justify-between items-center mb-4">
                      <div>
                        <p className="mb-1 text-lg font-semibold">
                          Shopping cart
                        </p>
                        <p className="mb-0 text-gray-500">
                          You have 4 items in your cart
                        </p>
                      </div>
                      <div>
                        <p className="mb-0">
                          <span className="text-gray-500">Sort by:</span>
                          <a
                            href="#"
                            className="text-gray-700 hover:text-gray-900"
                          >
                            {" "}
                            price
                            <i className="fas fa-angle-down ml-1" />
                          </a>
                        </p>
                      </div>
                    </div>

                    {[1, 2].map((item, index) => (
                      <div
                        key={index}
                        className="bg-white border rounded-lg mb-3 p-4 shadow-sm"
                      >
                        <div className="flex justify-between items-center">
                          <div className="flex items-center">
                            <img
                              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img1.webp"
                              className="w-20 h-20 rounded-lg object-cover"
                              alt="Shopping item"
                            />
                            <div className="ml-3">
                              <h5 className="text-lg font-semibold">
                                Iphone 11 pro
                              </h5>
                              <p className="text-sm text-gray-500">
                                256GB, Navy Blue
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center">
                            <div className="text-center w-[50px]">
                              <h5 className="text-lg font-semibold">2</h5>
                            </div>
                            <div className="text-center w-[80px]">
                              <h5 className="text-lg font-semibold">$900</h5>
                            </div>
                            <a
                              href="#"
                              className="text-gray-400 hover:text-red-700 ml-4"
                            >
                              <i className="fas fa-trash-alt" />
                            </a>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="lg:w-5/12 mt-6 lg:mt-0">
                    <div className="bg-green-600 text-white rounded-lg p-6">
                      <div className="flex justify-between items-center mb-4">
                        <h5 className="text-lg font-semibold">Card details</h5>
                      </div>

                      <p className="text-sm mb-2">Card type</p>
                      <div className="flex space-x-3 mb-4">
                        <a href="#" className="text-white">
                          <i className="fab fa-cc-mastercard fa-2x" />
                        </a>
                        <a href="#" className="text-white">
                          <i className="fab fa-cc-visa fa-2x" />
                        </a>
                        <a href="#" className="text-white">
                          <i className="fab fa-cc-amex fa-2x" />
                        </a>
                        <a href="#" className="text-white">
                          <i className="fab fa-cc-paypal fa-2x" />
                        </a>
                      </div>

                      <form className="mt-4">
                        <div className="mb-4">
                          <label htmlFor="typeName" className="text-white">
                            Cardholder's Name
                          </label>
                          <input
                            type="text"
                            id="typeName"
                            className="form-control form-control-lg w-full p-2 rounded-lg text-gray-800"
                            placeholder="Cardholder's Name"
                          />
                        </div>

                        <div className="mb-4">
                          <label htmlFor="typeText" className="text-white">
                            Card Number
                          </label>
                          <input
                            type="text"
                            id="typeText"
                            className="form-control form-control-lg w-full p-2 rounded-lg text-gray-800"
                            placeholder="1234 5678 9012 3457"
                            maxLength={19}
                          />
                        </div>

                        <div className="flex space-x-4 mb-4">
                          <div className="w-1/2">
                            <label htmlFor="typeExp" className="text-white">
                              Expiration
                            </label>
                            <input
                              type="text"
                              id="typeExp"
                              className="form-control form-control-lg w-full p-2 rounded-lg text-gray-800"
                              placeholder="MM/YYYY"
                              maxLength={7}
                            />
                          </div>
                          <div className="w-1/2">
                            <label htmlFor="typeCvv" className="text-white">
                              CVV
                            </label>
                            <input
                              type="password"
                              id="typeCvv"
                              className="form-control form-control-lg w-full p-2 rounded-lg text-gray-800"
                              placeholder="&#9679;&#9679;&#9679;"
                              maxLength={3}
                            />
                          </div>
                        </div>
                      </form>

                      <hr className="my-4 border-t border-gray-300" />

                      <div className="flex justify-between mb-2">
                        <p>Subtotal</p>
                        <p>$4798.00</p>
                      </div>

                      <div className="flex justify-between mb-2">
                        <p>Shipping</p>
                        <p>$20.00</p>
                      </div>

                      <div className="flex justify-between font-semibold mb-4">
                        <p>Total (Incl. taxes)</p>
                        <p>$4818.00</p>
                      </div>

                      <button
                        type="button"
                        className="w-full bg-green-700 hover:bg-green-800 text-white font-bold py-3 rounded-lg transition-colors"
                      >
                        <div className="flex justify-between">
                          <span>$4818.00</span>
                          <span>
                            Checkout{" "}
                            <i className="fas fa-long-arrow-alt-right ml-2" />
                          </span>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
