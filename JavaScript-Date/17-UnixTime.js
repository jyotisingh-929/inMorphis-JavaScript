function unix_timestamp_to_time(unixTimestamp){
    let date = new Date(unixTimestamp * 1000);

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let second = date.getMilliseconds();

    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    second = second < 10 ? '0' + second : second;

    return `"${hours}:${minutes}:${second}"`;

}
console.log(unix_timestamp_to_time(1439712000)); // Output: "00:00:00"
console.log(unix_timestamp_to_time(1609459200));