export default function formatDate(date: string) {
    const dateObj = new Date(date);
    const month = dateObj.toLocaleString("default", { month: '2-digit' });
    const day = dateObj.getDate();
    const year = dateObj.getFullYear();
    
    return `${day}/${month}/${year}`;
}