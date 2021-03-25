alert('Working')

document.querySelector('button').addEventListener('click', getQuote)
 
async function getQuote() {
  try {
    const res = await fetch('localhost:8000/api/ulmer')
    const data = res.json()

    
    console.log(data)
  } catch(err) {
    console.log(err)
  }
}