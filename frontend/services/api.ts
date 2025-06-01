export async function getBoardList() {
  const res = await fetch('https://your-api-gateway-url/board')
  return await res.json()
}

export async function submitBoard(payload: { title: string, content: string }) {
  const res = await fetch('https://your-api-gateway-url/board', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })
  return await res.json()
}
