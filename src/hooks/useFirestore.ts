import firestore from "@react-native-firebase/firestore";

import { useFirebaseUser } from "~/contexts/FirebaseUserContext";
import { UserProgress } from "~/storage/type";

import { format, isAfter, isBefore, subDays } from "date-fns";

type WeeklyDataArgs = {
    doc: string;
    subCollection: string;
    subDoc: string;
    month: string;
    currentDate: Date;
    today: number;
}

export const useFirestore = () => {
    const { firebaseUserId } = useFirebaseUser();

    function getLastStoredDataMonth(date: number) {
        return format(date, "MMMM").toLowerCase();
    }

    function getLastStoredDataYear(date: number) {
        return format(date, "yyyy");
    }

    async function getLastStoredYearDoc(docPath: string) {
        return await firestore()
            .doc(docPath)
            .get()
            .catch((error) => {
                console.warn("Error getting firestore doc: ", error);
            });
    }

    async function setLastStoredData(userDataArray: UserProgress[]) {
        if (!firebaseUserId) throw new Error("User token not found");
        for (const userData of userDataArray) {
            const parsedDate = Date.parse(userData.date);
            const docPath = `Users/${firebaseUserId}/${getLastStoredDataYear(parsedDate)}/${getLastStoredDataYear(parsedDate)}`;
            const lastStoredYearDoc = await getLastStoredYearDoc(docPath);
            const newUserData = {
                count: userData.count,
                date: userData.date,
                timing: (userData.timing + (userData.extraTime ?? 0)) * 60,
            };

            const yearUserHistory = {
                [getLastStoredDataMonth(parsedDate)]: firestore.FieldValue.arrayUnion(newUserData)
            };

            if (lastStoredYearDoc && lastStoredYearDoc.exists) {
                firestore()
                    .doc(docPath)
                    .update(yearUserHistory)
                    .catch((error) => {
                        console.warn("Error updating firestore doc: ", error);
                    });
            } else {
                firestore()
                    .doc(docPath)
                    .set(yearUserHistory)
                    .catch((error) => {
                        console.warn("Error setting firestore doc: ", error);
                    });
            }
        };
    }

    async function getWeeklyData({ doc, subCollection, subDoc, month, currentDate, today }: WeeklyDataArgs) {
        const document = await firestore().collection(`Users/${doc}/${subCollection}`).doc(subDoc).get();
        const result = document.data()?.[month] as UserProgress[];
        return result?.filter(({ date }) => {
            if (!date) return false;
            return isAfter(new Date(date), subDays(currentDate, today + 1)) && isBefore(new Date(date), currentDate);
        }) || [];
    };

    return { getLastStoredYearDoc, setLastStoredData, getWeeklyData };
};
