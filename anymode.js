const hack = Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner;

function currencyViaElement() {
  return Number(document.querySelector("#header > div.styles__headerRight___D5pQ1-camelCase > div > div").innerText)
}

function toset() {
  return [Object.fromEntries(Object.entries(hack.stateNode.state).filter(e => e[1] === currencyViaElement())), Object.entries(hack.stateNode.state).filter(e => e[1] === currencyViaElement())[0][0].slice(0,1)]
}

function whatToSetTo(callback) {
  hack.stateNode.props.liveGameController.getDatabaseVal("c", playas => {
    const pl = Object.entries(playas).filter(p => p[0] !== hack.stateNode.props.client.name).map(p => p[1][toset()[1]] || 0)
    if (Math.max(...pl) === 0) return callback(0)
    callback(Math.max(...pl) + 1)
  })
}

function setGold(gold) {
  const cd = {
      b: hack.stateNode.props.client.blook
    }
  cd[toset()[1]] = Object.values(toset()[0])[0]
  hack.stateNode.setState(toset()[0]);
  hack.stateNode.props.liveGameController.setVal({
    path: "c/".concat(hack.stateNode.props.client.name),
    val: cd
  });
}

setInterval(() => {
  whatToSetTo(setGold)
}, 1000)
