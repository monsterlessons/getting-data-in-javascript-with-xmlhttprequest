var xhr = new XMLHttpRequest()

xhr.open(
  'GET',
  'http://www.mocky.io/v2/59469f7d100000c30bf64ed6',
  true
)

xhr.send()

xhr.onreadystatechange = function () {
  if (xhr.readyState !== 4) {
    return
  }
  console.log('end')
  if (xhr.status === 200) {
    console.log('result', JSON.parse(xhr.responseText))
  } else {
    console.log('err', xhr.responseText)
  }
}
