var tab = {
  chose_index: 0,
  tab_ch: function (e) {
    var dataset = e.currentTarget.dataset
    return dataset.id
  }
}
module.exports = tab