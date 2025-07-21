import { parseText } from '../api/nlp';
import { useState } from 'react';

function NLP() {
    const [text, setText] = useState('');
    const [parsedText, setParsedText] = useState('');

    const handleParse = async () => {
        const parsed = await parseText(text);
        setParsedText(parsed);
    }
    
    return (
        <div>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
            <button onClick={handleParse}>Parse</button>
            <p>{parsedText}</p>
        </div>
    )
}

export default NLP;