export const getTemp = (temp: number, unitLabel: string) => `${Math.round(temp)} ${unitLabel}`;

export const getCurrentDate = () => {
    const currentDate = new Date();
    const currentMonth = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    const currentDay = (currentDate.getDate()).toString().padStart(2, '0');

    return `${currentDate.getFullYear()}-${currentMonth}-${currentDay}`
}