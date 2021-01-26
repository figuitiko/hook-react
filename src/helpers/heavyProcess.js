
export const heavyProgress = (iterator)=>{
    for(let i=0; i< iterator; i++) {
        console.log('go go go...');
    }
    return `${iterator} iterations done`;
}