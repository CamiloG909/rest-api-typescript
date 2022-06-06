import { DiaryEntry, NonSensitiveDiaryEntry } from './types'
import diaryData from '../diaries.json'

const diaries: DiaryEntry[] = diaryData as DiaryEntry[]

export const getEntries = (): DiaryEntry[] => diaries

export const getEntriesWithoutContent = (): NonSensitiveDiaryEntry[] => diaries

export const addEntry = (): undefined => undefined
