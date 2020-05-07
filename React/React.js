import React, {useEffect} from 'react';
import ReactDOM from 'react-dom';

const {useState} = React

const style = {
  table: {
    borderCollapse: 'collapse'
  },
  tableCell: {
    border: '1px solid gray',
    margin: 0,
    padding: '5px 10px',
    width: 'max-content',
    minWidth: '150px'
  },
  form: {
    container: {
      padding: '20px',
      border: '1px solid #F0F8FF',
      borderRadius: '15px',
      width: 'max-content',
      marginBottom: '40px'
    },
    inputs: {
      marginBottom: '5px'
    },
    submitBtn: {
      marginTop: '10px',
      padding: '10px 15px',
      border: 'none',
      backgroundColor: 'lightseagreen',
      fontSize: '14px',
      borderRadius: '5px'
    }
  }
}

function PhoneBookForm({addEntryToPhoneBook}) {
  const [userFirstname, setUserFirstname] = useState('');
  const [userLastname, setUserLastname] = useState('');
  const [userPhone, setUserPhone] = useState('');

  return (
    <form onSubmit={e => {
      e.preventDefault();
      addEntryToPhoneBook(userFirstname, userLastname, userPhone);
    }} style={style.form.container}>
      <label>First name:</label>
      <br/>
      <input
        style={style.form.inputs}
        className='userFirstname'
        name='userFirstname'
        type='text'
        value={userFirstname}
        onChange={e => setUserFirstname(e.target.value)}
      />
      <br/>
      <label>Last name:</label>
      <br/>
      <input
        style={style.form.inputs}
        className='userLastname'
        name='userLastname'
        type='text'
        value={userLastname}
        onChange={e => setUserLastname(e.target.value)}
      />
      <br/>
      <label>Phone:</label>
      <br/>
      <input
        style={style.form.inputs}
        className='userPhone'
        name='userPhone'
        type='text'
        value={userPhone}
        onChange={e => setUserPhone(e.target.value)}
      />
      <br/>
      <input
        style={style.form.submitBtn}
        className='submitButton'
        type='submit'
        value='Add User'
      />
    </form>
  )
}

function InformationTable(props) {

  useEffect(() => {
    return props
  })

  return (
    <table style={style.table} className='informationTable'>
      <thead>
      <tr>
        <th style={style.tableCell}>First name</th>
        <th style={style.tableCell}>Last name</th>
        <th style={style.tableCell}>Phone</th>
      </tr>
      </thead>
      <tbody>
      {
        props.contactList.map(el =>
          <tr>
            <td>{el.userFirstname}</td>
            <td>{el.userLastname}</td>
            <td>{el.userPhone}</td>
          </tr>)
      }
      </tbody>
    </table>
  );
}

function Application(props) {
  const [contactList, setContactList] = useState([])

  const addEntryToPhoneBook = (userFirstname, userLastname, userPhone) => {
    console.log(userFirstname, userLastname, userPhone)
    let newContact = contactList
    newContact.push({userFirstname: userFirstname, userLastname: userLastname, userPhone: userPhone})
    setContactList(newContact)
  }

  return (
    <section>
      <PhoneBookForm addEntryToPhoneBook={addEntryToPhoneBook}/>
      <InformationTable contactList={contactList}/>
    </section>
  );
}

ReactDOM.render(
  <Application/>,
  document.getElementById('root')
);
