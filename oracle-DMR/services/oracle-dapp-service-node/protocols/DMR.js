let DMR;
module.exports = async({ proto, address }) => {
  if (!DMR)
    DMR = require("DMR")();
  return new Promise((resolve, reject) => {
    const fen = address;
    // console.log("address", address);
    DMR.onmessage = function onmessage(event) {
      if (!event)
        return;
      console.log(event);

    };
    // DMR.postMessage(`Adding a new service`);
  });
};
