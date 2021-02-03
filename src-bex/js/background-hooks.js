// Hooks added here have a bridge allowing communication between the BEX Background Script and the BEX Content Script.
// Note: Events sent from this background script using `bridge.send` can be `listen`'d for by all client BEX bridges for this BEX

// More info: https://quasar.dev/quasar-cli/developing-browser-extensions/background-hooks

import axios from "axios";
export default function attachBackgroundHooks (bridge /* , allActiveConnections */) {



  // bridge.on('howMany', event => {
  //   let payload = event.data
  //   payload = 'blabla'
  //   console.log('backguond is hit')
  //   bridge.send('highlight.content.event', { someData: 'someValue '}).then(r => {
  //     console.log('Text has been highlighted')
  //   })
  //
  //   bridge.send(event.eventResponseKey, payload)
  // })


  bridge.on('connect', event => {
    debugger
    const userNeeds = event.data
     const response = axios ({
      url: 'http://localhost:4000/',
       method: 'post',
        data: userNeeds

    } )

debugger
      bridge.send(event.eventResponseKey, userNeeds)
      })




  bridge.on('storage.set', event => {
    const payload = event.data
    chrome.storage.local.set({ [payload.key]: payload.data }, () => {
      bridge.send(event.eventResponseKey, payload.data)
    })
  })

  bridge.on('storage.remove', event => {
    const payload = event.data
    chrome.storage.local.remove(payload.key, () => {
      bridge.send(event.eventResponseKey, payload.data)
    })
  })

  /*
  // EXAMPLES
  // Listen to a message from the client
  bridge.on('test', d => {
    console.log(d)
  })

  // Send a message to the client based on something happening.
  chrome.tabs.onCreated.addListener(tab => {
    bridge.send('browserTabCreated', { tab })
  })

  // Send a message to the client based on something happening.
  chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.url) {
      bridge.send('browserTabUpdated', { tab, changeInfo })
    }
  })
   */
}
