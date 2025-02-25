/**
 * Generate indexes by fixtures
 */

const fs = require('fs');
const { YAMLLoad, YAMLDump, getFixtureFolder } = require('./../functions');
const aliasDevice = new (require('../../parser/device/alias-device'))();
aliasDevice.setReplaceBrand(false);

const detector = new (require('../../index'))({
  discardDeviceIndexes: true,
});

let parserDevice = detector.getParseDevice('Mobile');

let excludeFilesNames = ['bots.yml', 'alias_devices.yml'];
let fixtureFolder = getFixtureFolder();
ymlDeviceFiles = fs.readdirSync(fixtureFolder + 'devices/');

let output = {};
ymlDeviceFiles.forEach((file) => {
  if (excludeFilesNames.indexOf(file) !== -1) {
    return;
  }
  let fixtureData = YAMLLoad(fixtureFolder + 'devices/' + file);
  fixtureData.forEach((fixture, pos) => {
    // get device code
    let result = aliasDevice.parse(fixture.user_agent);
    let deviceCode = result.name ? result.name : void 0;
    if (deviceCode !== void 0) {
      deviceCode = deviceCode.toLowerCase();
      let infos = parserDevice.parseAll(fixture.user_agent);
      if (infos.length) {
        let result = [];
        for (let info of infos) {
          if (info.brand && result.indexOf(info.brand) === -1) {
            result.push(info.brand);
          }
        }
        output[deviceCode] = result;
      }
    }
  });
});

let content = YAMLDump(output);
fs.writeFileSync(
  __dirname + '/../../regexes/device-index-hash.yml',
  content,
  'utf8'
);
