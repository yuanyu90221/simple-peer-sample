console.log(SimplePeer)
const p = new SimplePeer({
  initiator: location.hash === '#1',
  trickle: false
});
p.on('error', err=> console.log('error', err));
p.on('signal', data=> {
  console.log(data);
  console.log('SIGNAL', JSON.stringify(data));
  document.querySelector('#outgoing').textContent = JSON.stringify(data);
});
document.querySelector('form').addEventListener('submit', ev=>{
  ev.preventDefault();
  const data = document.querySelector('#incoming').value;
  console.log(data); 
  console.log(JSON.parse(document.querySelector('#incoming').value));
  p.signal(JSON.parse(document.querySelector('#incoming').value));
});
p.on('connect', ()=> {
  console.log('CONNECT');
  p.send('whatever'+Math.random());
});
p.on('data', data => {
  console.log('data: ' , data);
});
