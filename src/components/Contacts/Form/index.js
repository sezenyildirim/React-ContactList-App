import {useState} from 'react';


function Form({addContact,contacts}) {
    const [form, setForm] = useState({fullName:"", phoneNumber:""});

    const onChangeInput = (e) => {
        setForm({...form, [e.target.name]:e.target.value});
    };//input değişkenlerinin içersine yazı yazabilmek için

    const onSubmit = (e) => {
        e.preventDefault(); //sayfa yenilenmez
        if(form.fullName === '' || form.phoneNumber === ''){
            return false; //fullname ya da phonenumber inputlarından biri boşsa submit işlemi gerçekleşmez
        }
        addContact([...contacts, form]);
        //  console.log(form);

        setForm({fullName:'',phoneNumber:''});
    };
  return (
    <form onSubmit={onSubmit}>
        <div>
        <input name='fullName' placeholder='Full Name' value={form.fullName} onChange={onChangeInput}></input>
        </div>
        <div>
        <input name='phoneNumber' placeholder='Phone Number' value={form.phoneNumber} onChange={onChangeInput}></input>
        </div>
        <div className='btn'>
            <button onClick={onSubmit}>
                Add 
            </button>
        </div>

    </form>
  )
}

export default Form