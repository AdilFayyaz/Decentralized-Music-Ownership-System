const Music = artifacts.require("Music");

module.exports = function (deployer) {
  deployer.deploy(Music);
};
