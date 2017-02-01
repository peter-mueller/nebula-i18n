module.exports = {
  verbose: false,
  expanded: true,
  persistent: false,
  color: true,
  plugins: {
    local: {
      disabled: true,
      browsers: ['chrome', 'firefox', 'ie']
    },
    sauce: {
      disabled: true,
      browsers: [{
        browserName: 'chrome',
        platform: 'Linux',
        version: 'latest-2'
      }, {
        browserName: 'firefox',
        platform: 'Linux',
        version: 'latest-2'
      }, {
        browserName: 'microsoftedge',
        platform: 'Windows 10',
        version: '14'
      }, {
        browserName: 'internet explorer',
        platform: 'Windows 10',
        version: '11'
      }, {
        browserName: 'safari',
        platform: 'macOS 10.12',
        version: '10'
      }, {
        browserName: 'safari',
        platform: 'OS X 10.11',
        version: '9'
      }]
    }
  }
}