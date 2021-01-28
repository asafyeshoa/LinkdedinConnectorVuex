// Hooks added here have a bridge allowing communication between the BEX Content Script and the Quasar Application.
// More info: https://quasar.dev/quasar-cli/developing-browser-extensions/content-hooks

export default function attachContentHooks (bridge) {
  // Hook into the bridge to listen for events sent from the client BEX.
  bridge.on('highlight.content.event', event => {
    anonymousCards()
    bridge.send(event.responseKey)
  })
}


function anonymousCards() {
  let invitationCards = document.querySelectorAll('.invitation-card.artdeco-list__item.ember-view')
  invitationCards.forEach((card, key) => {
    let nameTitle = card.querySelector('.invitation-card__title.t-16.t-black.t-bold')
    let firstName = nameTitle.innerText.split(' ')[0]
    let subTitle = card.querySelector('.invitation-card__subtitle.t-14.t-black--light.t-normal')
    let withoutCompany = subTitle.innerText.split(' at ')[0].split(' - ')[0].split(' @ ')[0].split(', ')[0]
    subTitle.innerText = withoutCompany
    nameTitle.innerText = firstName
    card.querySelector('img').src = `https://robohash.org/${firstName}`
  })

}
