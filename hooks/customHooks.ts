import {useMemo} from "react";
import { getDatasets } from '@/components/ChartLogic/BarFunctions/DataSetsFunction';
import { useUserData } from '@/store/store';
import { PartialUserDataObj, TUserDataObj, TUserDataStore } from '@/types/MyTypes';

export function useChartData(NewSlicedData:PartialUserDataObj, YourName:string){
  const userData = useMemo(()=>({

    labels: NewSlicedData.date,
    datasets: getDatasets(NewSlicedData, YourName),
  }), [NewSlicedData])
  return userData;
}

// export function useSliceData() {
//   const UserData = useUserData(state => state.UserData)
//
//   function sliceData(data:TUserDataObj, startPoint:number, endPoint:number) {
//     const slicedData = {
//       date: data.date.slice(startPoint, endPoint),
//       amount: {},
//       entry_id: {},
//       description: {},
//       user_id: data.user_id,
//       name: data.name
//     };
//
//     for (const userId in data.amount) {
//       slicedData.amount[userId] = data.amount[userId].slice(startPoint, endPoint);
//       slicedData.entry_id[userId] = data.entry_id[userId].slice(startPoint, endPoint);
//       slicedData.description[userId] = data.description[userId].slice(startPoint, endPoint);
//     }
//
//     return slicedData;
//   }
//
//   return sliceData(UserData, visibleDatesFirst, visibleDatesLast)
// }
