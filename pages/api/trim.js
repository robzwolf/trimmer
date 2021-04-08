import nextConnect from 'next-connect';
import multer from 'multer';
import sharp from "sharp";

const handler = nextConnect({
    onError(error, req, res) {
        res.status(500).json({error: error.message });
    },
    onNoMatch(req, res) {
        res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
    },
});

handler.use(multer().single('image'));

handler.post(async (req, res) => {
    const imageTrimmed = await sharp(req.file.buffer).trim().toBuffer()
    res.setHeader('Content-Type', 'image/png')
    res.end(imageTrimmed)
});

export default handler;

export const config = {
    api: {
        bodyParser: false, // Disallow body parsing, consume as stream
    },
};
