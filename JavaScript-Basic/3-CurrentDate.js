function getCurrentDate(farmate) {
    const date = new Date();
    let dd = date.getDate();
    let mm = date.getMonth()+1;
    let yyyy = date.getFullYear();

    if(dd<10) dd = '0'+dd;
    if(mm<10) mm = '0'+mm;

    return (mm+farmate+dd+farmate+yyyy);
}
console.log("Current date in MM/DD/YYYY format:", getCurrentDate('/'));
console.log("Current date in MM-DD-YYYY format:", getCurrentDate('-'));