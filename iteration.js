for (let i = 0; i<10; i++){
    //console.log(i);
}
let names = [`Bob`,`Dave`,`Steve`,`Jim`];
for (let index = 0; index < names.length; index++) {
    //const element = array[index];
   // console.log(names[index]);
    
}
names.forEach(name => {
    console.log(name);
});
let kast = [];
for (let i = 0; i < 10; i++) {
    const roll = Math.ceil(Math.random()*6);
    kast.push(roll);
    //console.log(roll);
}
kast.forEach(roll => {
    console.log(roll);
    
});
for (let i = 0; i < kast.length; i++) {
    //console.log(kast[i]);
    
}