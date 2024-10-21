import { useState } from 'react';
import ReactMarkdown from 'react-markdown';

export default function MarkdownEditor() {
    const [markdown, setMarkdown] = useState('type markdown here');
    const [reversedSentence, setReversedSentence] = useState('');

    const handleChange = (event) => {
        setMarkdown(event.target.value);
    };

    const handleReverse = () => {
        const reversed = markdown.split(' ').reverse().join(' ');
        setReversedSentence(reversed.charAt(0).toUpperCase() + reversed.slice(1));
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <textarea
                value={markdown}
                onChange={handleChange}
                style={{ width: '80%', height: '200px', marginBottom: '20px' }}
            />
            <button onClick={handleReverse} style={{ marginBottom: '20px' }}>Reverse Sentence</button>
            <div style={{ width: '80%', border: '1px solid #ddd', padding: '10px' }}>
                <ReactMarkdown>{markdown}</ReactMarkdown>
            </div>
            {reversedSentence && (
                <div style={{ width: '80%', border: '1px solid #ddd', padding: '10px', marginTop: '20px' }}>
                    {reversedSentence}
                </div>
            )}
        </div>
    );
}