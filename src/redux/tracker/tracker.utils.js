const leadingZero = (value)=>{
    return value < 10 ? '0' + value : value;
}


export const formatTime = (time)=>{
    return `${time.getUTCDate()}/${time.getUTCMonth()+1}/${time.getFullYear()} - 
    ${time.getHours()}:${leadingZero(time.getMinutes())}:${leadingZero(time.getSeconds())}
    `;
};