import diaryData from '../../diaries.json'
import { DiaryEntry, NewDiaryEntry, NonSensitiveInfoDairyEntry} from '../types'

const diaries: DiaryEntry[] = diaryData as DiaryEntry[]

export const getEntries = (): DiaryEntry[] => diaries

export const findById = (id: number): NonSensitiveInfoDairyEntry | undefined=> {
    const entry = getEntriesWithoutSensitiveInfo().find(d => d.id === id)
    if (entry !== null) {
        const {...restOfDiary} = entry
        return restOfDiary
    }
    return entry
}


export const getEntriesWithoutSensitiveInfo = (): NonSensitiveInfoDairyEntry[] => {
    return diaries.map(({ id, date, weather, visibility }) => {
        return {
            id,
            date,
            weather,
            visibility
        }
    })
}

export const addDiary = (newDiaryEntry:NewDiaryEntry): DiaryEntry => {
    const newDiary = {
        id: diaries.length + 1,
        ...newDiaryEntry
    }
    diaries.push(newDiary)
    return newDiary
}


