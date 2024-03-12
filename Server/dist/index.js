"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const prisma = new client_1.PrismaClient();
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.get("/health", (req, res) => {
    res.send("OK");
});
app.post("/user/create", async (req, res) => {
    const { name, email } = req.body;
    const user = await prisma.user.create({
        data: {
            name: name,
            email: email,
        },
    });
    res.json({
        success: true,
        message: `${user.name} created succefully`,
    });
});
app.get("/users", async (req, res) => {
    const users = await prisma.user.findMany();
    res.json({ success: true, data: users });
});
app.post("/article/create", async (req, res) => {
    const { title, body, userId } = req.body;
    const article = await prisma.article.create({
        data: {
            title: title,
            body: body,
            author: {
                connect: userId,
            },
        },
    });
    return res.json({
        success: true,
        message: `${article.id} created succesfully`,
    });
});
app.get("/articles", async (req, res) => {
    const articles = await prisma.article.findMany();
    return res.json({ success: true, data: articles });
});
app.listen(3001, () => {
    console.log("app running at 3001");
});
