//This line is REQUIRED for all Axios functions
const axios = require('axios').default;

/***********************************************
*
*       GET REQUESTS
*
***********************************************/

//Basic Get for all products
axios.get('/products')
  .then(function (response) {
    // handle success
    console.log("GET /products succeeded.  Returned should be a 2xx code and all products.");
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log("GET /products failed. Received a 4xx or 5xx error code.");
    console.log(error);
  })
  .then(function () {
    // always executed
   console.log("GET /products at then function. May now do anything you wish.");
  });

//Basic Get for all products that will return 404
axios.get('/proudcts') //Product is misspelled
  .then(function (response) {
    // handle success - WILL NOT OCCUR
    console.log("GET /products succeeded.  Returned should be a 2xx code and all products.");
    console.log(response);
  })
  .catch(function (error) {
    // handle error - WILL OCCUR with 404 because of misspelled
    console.log("GET /products failed. Received a 4xx or 5xx error code.");
    console.log(error);
  })
  .then(function () {
    // always executed
   console.log("GET /products at then function. May now do anything you wish.");
  });

//Filtering all products for women's boots size 7
axios.get('/products/women/boots/7')
  .then(function (response) {
    // handle success
    console.log("GET /products/women/boots/7 succeeded.  Returned should be a 2xx code and all women's boots size 7.");
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log("GET /products/women/boots/7 failed. Received a 4xx or 5xx error code.");
    console.log(error);
  })
  .then(function () {
    // always executed
   console.log("GET /products/women/boots/7 at then function. May now do anything you wish.");
  });

//Filtering can also be formatted like this:
//This makes the parameters more clear and is eailsy done with variables from other areas of code
axios.get('/products', {
    params: {
      gender: 'women',
      shoeType: 'boots',
      size: 7
    }
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })
  .then(function () {
    // always executed
  });


  /***********************************************
  *
  *       POST REQUESTS
  *
  ***********************************************/

//Create a new user "Luke Skywalker"
axios.post('/user', {
  firstName: 'Luke',
  lastName: 'Skywalker'
})
.then(function (response) {
  console.log("POST /user succeeded at creating Luke Skywalker.  Returned should be a 201 status code.");
  console.log(response);
})
.catch(function (error) {
  console.log("POST /user failed at creating Luke Skywalker.  Returned should be a 500 or 400 status code.");
  console.log(error);
});


//misspelled firstName will result in error
axios.post('/user', {
  firstNmae: 'Luke',
  lastName: 'Skywalker'
})
.then(function (response) {
  console.log(response);
})
.catch(function (error) {
  console.log(error);
});


/***********************************************
*
*       PUT REQUESTS
*
***********************************************/

//Update the user "Luke Skywalker" and add his favorite thing
//PUT will create a new user if Luke Skywalker does not exist yet
axios.post('/user', {
  firstName: 'Luke',
  lastName: 'Skywalker',
  favoriteThing: 'His Light Saber'
})
.then(function (response) {
  console.log("POST /user succeeded at upadting Luke Skywalker.  Returned should be a 201 status code.");
  console.log(response);
})
.catch(function (error) {
  console.log("POST /user failed at updating Luke Skywalker.  Returned should be a 500 or 400 status code.");
  console.log(error);
});


  /***********************************************
  *
  *       Delete REQUESTS
  *
  ***********************************************/
  //Delete the product who's ide is 1458
  axios.delete('/product/1458')
  .then(function (response) {
    console.log("DELETE /product/1458 succeeded at deleting product with id 1458.  Returned should be a 200 status code.");
    console.log(response);
  })
  .catch(function (error) {
    console.log("DELETE /product/1458 failed at deleting product with id 1458.  Returned should be a 500 or 400 status code.");
    console.log(error);
  });


//Delete the product who's ide is 1458 alternate formatting
axios.delete('/product', {
  id: 1458
})
.then(function (response) {
  console.log("DELETE /product succeeded at deleting product with id 1458.  Returned should be a 200 status code.");
  console.log(response);
})
.catch(function (error) {
  console.log("DELETE /product failed at deleting product with id 1458.  Returned should be a 500 or 400 status code.");
  console.log(error);
});
