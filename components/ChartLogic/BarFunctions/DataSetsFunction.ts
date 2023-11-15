import { PartialUserDataObj, TUserDataObj } from '@/types/MyTypes';

export function getDatasets(data:PartialUserDataObj, yourName:string){
    const userName = yourName;

    const colors: string[] = [
        '#ffc400', '#000bd4', '#21f344', '#673ab7',
        '#0dbcd2',  '#ee6008', '#08771a'
    ]

    const datasets = (data?.amount ? Object.keys(data.amount) : []).map((userId,index)=>{
        const label = data.name ? data.name[userId]: "";
        const isUserName = label === userName;
        let userColor
        isUserName ? userColor = 'e91e1e' : userColor = colors[index]

        return {
            label: label,
            userId: data.user_id,
            data: data.amount ? data.amount[userId] : "",
            backgroundColor: userColor,
            borderColor: 'black',
            borderWidth: 1,
            description: data.description ? data.description[userId]: "",
            entry_id: data.entry_id ? data.entry_id[userId] : ""
        }
    })
    return datasets;
}