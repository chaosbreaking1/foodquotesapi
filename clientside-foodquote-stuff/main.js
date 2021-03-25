alert('Working')

document.querySelector('button').addEventListener('click', getQuote)
 
async function getQuote() {
  try {
    const res = await fetch('http://localhost:8000/api/ulmer')
    const data = await res.json()

    
    console.log(data)
  } catch(err) {
    console.log(err)
  }
}