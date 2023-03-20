import { Router, Request, Response } from "express";
import articleRouter from "./features/article/auth.routes";

const router = Router() 

router.get("/", (
    req: Request, 
    res : Response
) => {
    res.status(200).json({
        message: "Service Running Ok", 
        status: true, 
        statusCode: 200, 
        data : []
    })
});

router.use(articleRouter);

export default router