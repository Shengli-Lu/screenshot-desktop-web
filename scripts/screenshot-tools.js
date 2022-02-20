const screenshot = require('screenshot-desktop')

const generateScreenshot=async (ssName)=>{
  await screenshot({ filename: ssName }).then((imgPath) => {
    // imgPath: absolute path to screenshot
    // created in current working directory named ssName
    console.log(imgPath);
  });
}
module.exports = generateScreenshot;