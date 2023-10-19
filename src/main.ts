import './style.css'

document.addEventListener('DOMContentLoaded', () => {
    
  document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Local Storage - TypeScript - OwlScript</h1>
    <fieldset>
      <legend>Insert Data</legend>
      <input type="text" placeholder="keys..." id="keyInp"/>
      <input type="text" placeholder="values..." id="valInp"/>
      <button id="btn">Insert</button>
    </fieldset>
    <fieldset id="result">
      <legend>Local Storage</legend>
    </fieldset>
  `;
  
  const keyInp = document.querySelector('#keyInp') as HTMLInputElement;
  const valInp = document.querySelector('#valInp') as HTMLInputElement;
  const btn = document.querySelector('#btn') as HTMLButtonElement;
  
  btn.addEventListener('click', () => {
    const key = keyInp.value;
    const val = valInp.value;
    
    if(key && val) {
      localStorage.setItem(key, val);
      location.reload();
    }
  });
  
  if(localStorage.length > 0) {
    const res = document.querySelector('#result') as HTMLFieldSetElement;

    for(let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);

      if(key !== null) {
        const value = localStorage.getItem(key);
        res.innerHTML += `<p>${key}: ${value}</p>`;
      }
    }
  };
});


