class Command {
   constructor(commandType, value) {
     this.commandType = commandType;
     if (!commandType) {
       throw Error("Command type required.");
     }
     this.value = value;
   }
 
 }
 
 module.exports = Command;

 class Command1 {
   constructor(commandType, value) {
     this.commandType = commandType;
     if (!commandType) {
       throw Error("Constructor sets command type.");
     }
     this.value = value;
   }
 
 }
 
 module.exports = Command1;

  class Command2 {
   constructor(commandType, value) {
     this.commandType = commandType;
     if (!commandType) {
       throw Error("Constructor sets a value passed in as the 2nd argument");
     }
     this.value = value;
   }
 
 }
 
 module.exports = Command2;