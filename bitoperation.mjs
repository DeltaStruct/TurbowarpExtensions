var entry={
  name:'bit演算',
  extensionId:'bitOperation',
  extensionURL:'https://raw.githubusercontent.com/DeltaStruct/TurbowarpExtentions/main/bitoperation.mjs',
  description:'bit演算を行います',
  featured:true,
  helpLink:'https://raw.githubusercontent.com/DeltaStruct/TurbowarpExtentions/main/bitoperation.mjs'
}
var TimerPlus=function(){}
TimerPlus.timers={}
TimerPlus.prototype.getInfo=function(){return {
  id:entry.extensionId,
  name:entry.name,
  docsURI:entry.helpLink,
  blocks:[
    {opcode:'plus',
     blockType:'reporter',
     text:'[A]+[B]',
     arguments:{
       A:{type:'string',defaultValue:' '},
       B:{type:'string',defaultValue:' '}
     }
    },
    {opcode:'subtract',
     blockType:'reporter',
     text:'[A]-[B]',
     arguments:{
       A:{type:'string',defaultValue:' '},
       B:{type:'string',defaultValue:' '}
     }
    },
    {opcode:'multiply',
     blockType:'reporter',
     text:'[A]*[B]',
     arguments:{
       A:{type:'string',defaultValue:' '},
       B:{type:'string',defaultValue:' '}
     }
    },
    {opcode:'divide',
     blockType:'reporter',
     text:'[A]/[B]',
     arguments:{
       A:{type:'string',defaultValue:' '},
       B:{type:'string',defaultValue:' '}
     }
    }
  ]
}}
TimerPlus.prototype.plus=function(args){
  try{return String(BigInt(args.A)+BigInt(args.B))}catch{return '0'}
}
TimerPlus.prototype.subtract=function(args){
  try{return String(BigInt(args.A)-BigInt(args.B))}catch{return '0'}
}
TimerPlus.prototype.multiply=function(args){
  try{return String(BigInt(args.A)*BigInt(args.B))}catch{return '0'}
}
TimerPlus.prototype.divide=function(args){
  try{return String(BigInt(args.A)/BigInt(args.B))}catch{return '0'}
}

export{TimerPlus as blockClass,entry}
