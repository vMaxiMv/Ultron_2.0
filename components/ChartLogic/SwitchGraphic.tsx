import React from 'react';
import { useUserData } from '@/store/store';
import CommonCharts from '@/components/ChartLogic/CommonCharts/CommonCharts';
import { TUserDataObj } from '@/types/MyTypes';


function SwitchGraphic() {
  const UserData = useUserData(state => state.UserData)


  function sliceData(data:TUserDataObj, startPoint:number, endPoint:number) {
    const slicedData: TUserDataObj = {
      date:  data.date.slice(startPoint, endPoint),
      amount: {} ,
      entry_id: {},
      description: {},
      user_id: data.user_id,
      name: data.name
    };

    for (const userId in data.amount) {
      slicedData.amount[userId] = data.amount[userId].slice(startPoint, endPoint);
      slicedData.entry_id[userId] = data.entry_id[userId].slice(startPoint, endPoint);
      slicedData.description[userId] = data.description[userId].slice(startPoint, endPoint);
    }

  }
  return (
    <div>
      <CommonCharts />
    </div>
  );
}

export default SwitchGraphic;