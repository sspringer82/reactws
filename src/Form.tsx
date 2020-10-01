import * as React from 'react';


const Form: React.FC = () => {

  const [log, setLog] = React.useState({from: '', until: ''});

  function handleSubmit(e: any) {
    e.preventDefault();
    console.log(log);
  }

  function handleChange(e: any) {
    const name = e.currentTarget.name
    const value = e.currentTarget.value;
    // talk to server
    // then update state
    setLog(prevState => {
      return {...prevState, [name]: value};
    });
  }

  return <form onSubmit={handleSubmit}>
    <label htmlFor="from">From: </label>
    <input type="text" name="from" value={log.from} onChange={handleChange}></input>
    <label htmlFor="until">Until: </label>
    <input type="text" name="until" value={log.until} onChange={handleChange}></input>
    <button type="submit">speichern</button>
  </form>
}

export default Form;