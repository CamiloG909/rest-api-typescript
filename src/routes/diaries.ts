import express from 'express'
import { getEntriesWithoutContent } from '../controllers/diaries.controller'
const router = express.Router()

router.get('/', (_, res) => {
	const entries = getEntriesWithoutContent()
	res.json(entries)
});



export default router
