import express from 'express'
import { getEntriesWithoutContent, addDiary, findById } from '../controllers/diaries.controller'
import toNewDiaryEntry from '../utils/entries'
const router = express.Router()

router.route('/')
	.get((_, res) => {
		const entries = getEntriesWithoutContent()
		res.json(entries)
	})
	.post((req, res) => {
		try {
			const { date, weather, visibility, comment } = req.body;

			const newDiaryEntry = toNewDiaryEntry({date, weather, visibility, comment});

			const addedDiaryEntry = addDiary(newDiaryEntry);

			res.json(addedDiaryEntry)
		} catch(e : any) {
			res.status(400).json({error: e.message})
		}
	})

router.get('/:id', (req, res) => {
	const diary = findById(+req.params.id);
	return (diary != null) ? res.json(diary) : res.status(404).json({ message: 'Diary not found' });
})

export default router
