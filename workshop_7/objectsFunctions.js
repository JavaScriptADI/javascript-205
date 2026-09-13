const tools = { 
    shout: (t) => t.toUpperCase(), 
    whisper: (t) => t.toLowerCase() 
};

const list = [tools.shout, tools.whisper] ;

console.log(tools.shout("go"));
console.log(tools.whisper("GO"));


// function call
console.log(list[0]("go"));

console.log(console);