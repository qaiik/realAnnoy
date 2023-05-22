const hack = Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner;

function whatToSetTo(callback) {
  hack.stateNode.props.liveGameController.getDatabaseVal("c", playas => {
    const pl = Object.entries(playas).filter(p => p[0] !== hack.stateNode.props.client.name).map(p => p[1].g || 0)
    if (Math.max(...pl) === 0) return callback(0)
    callback(Math.max(...pl) + 1)
  })
}

function setGold(gold) {
  hack.stateNode.setState({
    gold,
    gold2: gold
  });
  hack.stateNode.props.liveGameController.setVal({
    path: "c/".concat(hack.stateNode.props.client.name),
    val: {
      b: hack.stateNode.props.client.blook,
      g: gold
    }
  });
}

setInterval(() => {
  whatToSetTo(setGold)
}, 1000)
