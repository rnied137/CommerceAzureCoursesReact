import Markdown from 'markdown-to-jsx';
import { useState, useEffect } from 'react';

export const MarkdownGenerator = (source="") => {
    const [content, setContent] = useState({md:""});

    useEffect(() => {
        fetch(source)
        .then((res)=> res.text())
        .then((md)=>setContent({md}))
    }, [source])

    return (
        <div>
            <Markdown children={content.md}/>
        </div>
    )
}


/*import(`./markdown/${file_name}`)
.then(res => {
    fetch(res.default)
        .then(res => res.text())
        .then(res => setPost(res))
        .catch(err => console.log(err));
})
.catch(err => console.log(err));
});

return (
<div className="container">
<Markdown>
    {post}
</Markdown>
</div>
*/