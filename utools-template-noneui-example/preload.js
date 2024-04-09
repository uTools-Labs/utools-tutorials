window.exports = {
    "demo-none-ui": { 
       mode: "none", 
       args: {
         enter: (action) => {
          window.utools.hideMainWindow()
          const url = action.payload
          if (!url) return
          require('electron').shell.openExternal(url)
          window.utools.outPlugin()
         },
       } 
    }
 }