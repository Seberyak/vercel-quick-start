import product from "./api/product";
import * as express from "express";

const app = express();

const PORT = process.env.PORT || 5050;

app.use("/api/product", product);

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});

export {app};