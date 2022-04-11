import * as express from "express";

const router = express.Router();

router.get("/", (req, res) => {
    res.json({
        status: 200,
        message: "Get data of product has success",
    });
});

export default router;