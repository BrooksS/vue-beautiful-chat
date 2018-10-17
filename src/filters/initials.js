export default function (first, last) {
  function removeJunk (value) {
    if (!value) return ''
    const noNumbers = value.replace(/[^a-zA-Z ]/g, '')
    const splitName = noNumbers.toString().split(' ')
    const prefixesAndSuffixes = ['', 'Dr.', 'Mr.', 'Mrs.', 'Ms.', 'Jr.', 'Sr.', 'II', 'III', 'IV']
    const justName = splitName.filter((part) => (prefixesAndSuffixes.indexOf(part) === -1))
    return (justName.length < 1) ? '' : justName.join(' ')
  }

  const firstInitial = removeJunk(first).charAt(0).toUpperCase()
  const lastInitial = removeJunk(last).charAt(0).toUpperCase()
  return firstInitial + lastInitial
}
