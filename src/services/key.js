export default function generatorId(){
    
    const random = Math.random().toString(36).substring(2);
    const date = new Date.now().toString(36);

    return random + date;
}