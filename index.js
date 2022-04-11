const express = require('express');
const product = require('./api/product');

const index = express();

const PORT = process.env.PORT || 5050;

index.use("/api/product", product);

index.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});

module.exports = index;
