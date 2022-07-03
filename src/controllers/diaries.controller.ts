import { DiaryEntry, NonSensitiveDiaryEntry, NewDiaryEntry } from '../types';
import diaryData from '../diaries.json';

const diaries: DiaryEntry[] = diaryData as DiaryEntry[]

export const getEntries = (): DiaryEntry[] => diaries

export const getEntriesWithoutContent = (): NonSensitiveDiaryEntry[] => {
	return diaries.map(({id, date, weather, visibility}) => {
		return {id, date, weather, visibility}
	})
}

export const addDiary = (newDiaryEntry : NewDiaryEntry): DiaryEntry => {
	const newDiary : DiaryEntry = {
		id: Math.max(...diaries.map(diary => diary.id)) + 1,
		...newDiaryEntry
	}

	diaries.push(newDiary);

	return newDiary;
}

export const findById = (id: number) : NonSensitiveDiaryEntry | undefined => {
	const entry = diaries.find(diary => diary.id === id);

	if(entry != null) {
		const {comment, ...rest} = entry;

		return rest;
	}

	return entry;
}
