class Message {
   const parse = require('../Message');

describe("Message", function(){

   it("throws error if a name is NOT passed into the constructor as the first parameter", function() {
    expect( function() { new Message();}).toThrow(new Error('Message name required.'));
  });

  it("constructor sets name", function() {
    let message = new Message('New message!');
    expect(message.name).toEqual('New message!');
  });

  it("contains a commands array passed into the constructor as 2nd argument", function() {
    let commands = [new Command('STATUS_CHECK'), new Command('MOVE', 20)];
    let message = new Message('Another message!', commands);
    expect(message.commands).toEqual(commands);
  });

});
}

   constructor(position, mode, generatorWatts){
      this.position = position;
      this.mode = mode;
      this.generatorWatts = generatorWatts;
    }

   reportPosition() {
      let position = 98382;
      let mode = "NORMAL";
      let generatorWatts = 110;
      let status = `${this.position} is ${this.mode} and generates ${this.generatorWatts} watts.`;
      return position;
   }
}

let fox = new Astronaut('Fox', 7, 12);
console.log(fox.reportStats());

module.exports = Message;


