import { useState } from "react";

function GifExpertApp(){

    const [categories, setCategories] = useState([ 'One Punch', 'Dragon Ball' ])
    const [inputValue, setInputValue] = useState([ 'New Category' ])

    const addCategory = () => {
        setCategories([...categories, inputValue]);
    }

    const onInputChange = (event) => {
        setInputValue( event.target.value );
    }

    return(
        <div className="GifExpertApp">
            <h1>This is the title</h1>
            <h2>This is a subtitle</h2>
            <input type="text" value={ inputValue } onChange = { (event) => onInputChange(event) }>
            </input>
            <ol>
                { categories.map(category => {
                    return <li key={ category }>{category}</li>
                })}
            </ol>
            <button onClick={ addCategory }>Click here to add a new category</button>
        </div>
    );
}

export default GifExpertApp